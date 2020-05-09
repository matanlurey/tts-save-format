import * as fs from 'fs-extra';
import { compileFromFile } from 'json-schema-to-typescript';
import minimist from 'minimist';
import * as path from 'path';
import prettier from 'prettier';

const argv = minimist(process.argv.slice(2));

const inSchema = path.join('src', 'schema');
const outTypes = argv.output;

let output = '';

const writeFile = outTypes
  ? (text: string): void => fs.writeFileSync(outTypes, text)
  : (text: string): void => {
      output = `${text}`;
    };

const appendFile = outTypes
  ? (text: string): void => fs.appendFileSync(outTypes, text)
  : (text: string): void => {
      output += text;
    };

export async function compileSchemas(): Promise<string> {
  writeFile(
    '/* tslint:disable */\n/** Execute `npm run generate` to regenerate **/',
  );
  const schemaFiles = fs.readdirSync(inSchema);
  schemaFiles.sort();
  for (const schema of schemaFiles) {
    if (!schema.endsWith('.json')) {
      continue;
    }
    let out = await compileFromFile(path.join(inSchema, schema), {
      cwd: inSchema,
      declareExternallyReferenced: false,
      bannerComment: `/* Generated from ${schema} */`,
    });
    // Some of the referenced types are suffixed with numbers, probably due to
    // not canonicalizing references in the schema. This is a huge hack, but
    // is probably stable - it removes trailing numbers in identifiers.
    out = out.replace(/([a-zA-Z])(\d*)(\b;|\[)/g, '$1$3');
    appendFile(`\n${out}`);
  }
  return prettier.format(output, {
    parser: 'typescript',
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    tabWidth: 2,
  });
}

if (argv.output) {
  compileSchemas();
}
