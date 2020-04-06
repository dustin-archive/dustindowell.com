
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

const variables = {
  development: {
    // 'GTAG': '',
    'PRODUCTION': false
  },
  production: {
    // 'GTAG': '',
    'PRODUCTION': true,
    'console.log': 'undefined && console.log',
    'runtype': 'undefined && runtype'
  }
}

const env = variables[process.env.NODE_ENV || 'production']
const options = Object.assign({}, env)

// NOTE
// 1. Workaround to allow imports in symlinked files
export default {
  external: ['fs'],
  plugins: [
    replace(options),
    resolve({
      mainFields: ['module'] // 1
    })
  ],
  output: {
    format: 'iife'
  }
}
