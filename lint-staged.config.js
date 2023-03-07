module.exports = {
  '**/*.{js,ts,tsx}': ['eslint --fix', 'prettier --write --ignore-unknown'],
  '**/*.ts?(x)': () => 'yarn types',
  '*.json': ['prettier --write --ignore-unknown'],
};
