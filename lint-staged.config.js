module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write --ignore-unknown'],
  '**/*.ts?(x)': ['bash -c tsc --noEmit --incremental false --pretty'],
  '*.json': ['prettier --write --ignore-unknown'],
};
