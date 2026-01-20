/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn', 'clsx', 'cva'],
};
