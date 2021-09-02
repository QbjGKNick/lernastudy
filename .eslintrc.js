module.exports = {
  extends: ["eslint:recommand"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  // 这是一个prettier插件，它可以关闭跟eslint冲突的那些规则，走自己的风格规则
  plugins: ["prettier"],
  rules: {
    "no-noused-vars": false,
    // 如果不符合
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  env: { node: true },
};
