module.exports = function(eleventyConfig) {
    // 日付を YYYY-MM-DD 形式にするためのフィルタを追加
    eleventyConfig.addFilter("date", (dateObj) => {
      const d = new Date(dateObj);
      return d.toISOString().split('T')[0];
    });
  
    return {
      pathPrefix: "/my-essays/", // GitHub Pages用の設定
      dir: {
        input: ".",
        includes: "_includes",
        output: "_site"
      }
    };
  };