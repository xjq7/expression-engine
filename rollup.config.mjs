// rollup.config.mjs
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    name: 'expression',
  },
  plugins: [nodeResolve({ exportConditions: ['node'] }), terser()],
};
