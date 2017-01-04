import resolve      from 'rollup-plugin-node-resolve'
import commonjs     from 'rollup-plugin-commonjs'
import builtins     from 'rollup-plugin-node-builtins';
import postcss      from 'rollup-plugin-postcss'
import precss       from 'precss'
import cssnext      from 'postcss-cssnext'
import rucksack     from 'rucksack-css'
import size         from 'postcss-size'
import lost         from 'lost'
import babel        from 'rollup-plugin-babel'


export default {
  entry: 'src/main.js',
  dest: 'dist/js/bundle.js',
  format: 'cjs',
  sourceMap: 'inline',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    postcss({
      extensions: ['.css', '.sss'],
      extract: './dist/css/main.css',
      sourceMap: true,
      plugins: [
        precss(),
        cssnext({
          calc: false,
          rem: false,
        }),
        size(),
        rucksack(),
        lost(),
      ],
    }),
    builtins(),
    commonjs(),
    babel({
      babelrc: false,
      presets: ["es2015-rollup"],
      exclude: 'node_modules/**',
    })
  ]
}