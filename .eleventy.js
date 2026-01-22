module.exports = function(eleventyConfig) {
    return {
      pathPrefix: "/my-essays/", // リポジトリ名を指定
      dir: {
        input: ".",
        includes: "_includes",
        output: "_site"
      }
    };
  };