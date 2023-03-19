/* eslint-disable no-console */
import { build } from 'esbuild';

build({
  bundle: true,
  minify: true,
  sourcemap: true,
  platform: 'node',
  entryPoints: ['./src/app.ts'],
  format: 'cjs',
  target: 'node16.0',
  outfile: './dist/app.js',
}).catch((e) => {
  console.log('Build not successful', e.message);
  process.exit(1);
});
