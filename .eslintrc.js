module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 你的脚本将要运行在什么环境中
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
    'es6'
  ],
  // 开启规则和发生错误时报告的等级 
  // 0或’off’：关闭规则。 
  // 1或’warn’：打开规则，并且作为一个警告（并不会导致检查不通过）。 
  // 2或’error’：打开规则，并且作为一个错误 (退出码为1，检查不通过)。
  rules: {
    'indent': [2, 'tab'],
    'no-debugger': 2,
    'no-extra-semi': 2,
    'no-undefined': 2,
    'generator-star-spacing': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
