# Main Idea
Importing libraries from `node_modules`.
Code splitting libraries and app code.
# Note
1. in `src/app.js` libraries from `node_modules` do not have filepath, just like Node.js
2. If no `CommonChunkPlugin` is used then `moment` library will exist in `app.bundle.js` as well as `vendor.bundle.js`
3. `CommonChunkPlugin` is webpack core plugin
4. `CommonChunkPlugin` strips away what is common in both `app.bundle.js` and `vendor.bundle.js`, then it makes new file with `output.filename` and `name` property in `CommonsChunkPlugin` argument. Hence if `CommonsChunkPlugin`'s name property is `vendor` it overwrites `vendor.bundle.js` that was created by `output.filename` and `entry.vendor`