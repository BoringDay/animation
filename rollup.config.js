import babel from 'rollup-plugin-babel'
import scss from 'rollup-plugin-scss'

export default {
  input: 'src/core/index.js',
  output: {
    file: 'build/index.js',
    format: 'iife',
    sourceMap: 'inline'
  },
  plugins: [
    scss(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
