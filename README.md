# Main Idea
Move files from one folder to another.

For the sake of learning, say that the whole purpose of using webpack, initially at least, was to move files in one folder to another.

This commit shows how webpack moves files from `src` to `public`

# Note
1. Use of plugin: `copy-webpack-plugin`. This does the moving.
2. Use of `context` property.
3. Exporting function that return config object.
4. `package.scripts.build`'s `webpack` command points to `node_modules/.bin/weppack`.
5. `entry` and `output.filename` is required.


