import * as fs from 'fs-extra';
import { compileFromFile } from 'json-schema-to-typescript';
import * as path from 'path';

const inSchema = path.join('src', 'schema');
const outTypes = path.join('src', 'types.d.ts');

fs.writeFileSync(
  outTypes,
  '/* tslint:disable */\n/** Execute `npm run generate` to regenerate **/\n\n',
);

(async (): Promise<void> => {
  for (const schema of fs.readdirSync(inSchema)) {
    const out = await compileFromFile(path.join(inSchema, schema), {
      cwd: inSchema,
      declareExternallyReferenced: false,
    });
    // out = out.replace(/\d*\b;/g, '');
    fs.appendFileSync(outTypes, out);
  }
})();
