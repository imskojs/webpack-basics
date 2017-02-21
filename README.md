# Main Idea
Importing libraries that are not available from `npm` using `import` or `require`

# Note
1. `imports-loader` changes or eliminates global variable.
  1. eg) `imports-loader?window=>{}` injects `var window = {}` in the importing library.
2. `exports-loader` injects `module.exports = objectWeWantToExport`
  1. eg) `exports-loader?leftPad` injects `module.exports = leftPad`