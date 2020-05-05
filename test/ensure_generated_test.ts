import * as fs from 'fs-extra';
import * as path from 'path';
import { compileSchemas } from '../tool/generate';

test('src/types.d.ts is up to date', async () => {
  const build = await compileSchemas();
  const source = await fs.readFile(path.join('src', 'types.d.ts'), 'utf-8');
  expect(build).toBe(source);
});
