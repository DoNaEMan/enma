module.exports = {
  'extends': 'airbnb',
  'plugins': [
    'react',
    'jsx-a11y',
    'import',
  ],
  'globals': {
    'document': true,
    'window': true,
    'global': true,
    'process': true,
    '__dirname': true,
  },
  "rules": {
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "react/jsx-filename-extension": 0
  }
}