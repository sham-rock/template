// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    // 转换px为rem配置
    "postcss-pxtorem": {
      "rootValue": 32,
      "propList": ["*"]
    }
  }
}
