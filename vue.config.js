const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    /\bvue-awesome\b/
  ],
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Usama Mirza',
    },
  }
})
