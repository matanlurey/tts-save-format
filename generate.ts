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
    let out = await compileFromFile(path.join(inSchema, schema), {
      cwd: inSchema,
      declareExternallyReferenced: false,
      bannerComment: `/* Generated from ${schema} */`,
    });
    // Some of the referenced types are suffixed with numbers, probably due to
    // not canonicalizing references in the schema. This is a huge hack, but
    // is probably stable - it removes trailing numbers in identifiers.
    out = out.replace(/([a-zA-Z])(\d*)(\b;|\[)/g, '$1$3');
    fs.appendFileSync(outTypes, `\n${out}`);
  }
})();
