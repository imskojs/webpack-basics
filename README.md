# Main Idea
Tree Shaking: Remove exported but unused code.

# Note
1. Unused code still exists in a file that is exporting. It will be removed when minified
2. All it needs is `presets: [['es2015', {modules: false}]]` in `.babelrc`. Note nested array
3. modules loaded using `require.resolve` in `webpack.config.js`cannot get tree shaked