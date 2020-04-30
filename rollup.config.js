
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/build.cjs.js',
      format: 'cjs',
      name: 'brr',
    },
    {
      file: 'dist/build.es.js',
      format: 'es',
      name: 'brr',
    },
    {
      file: 'dist/build.min.js',
      format: 'iife',
      name: 'brr',
    }
  ],
  plugins: [
    typescript(),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    terser()
  ]
};
