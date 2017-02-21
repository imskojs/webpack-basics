# Main Idea
Creating output with chunkHash. So that we can cache it infinitely.

# Note
1. by `[chunkHash].bundle.js`  we no longer use that file in index.html as is now as it will be different everytime we build it.
2. use `html-webpack-plugin` to use `[chunkHash]` name in `index.html`
2. we can cache the file indefintely as everytime we build and deploy we will get the new file.
