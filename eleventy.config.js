module.exports = function (eleventyConfig) {
  // copy files
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/img/");

  // ignore directories and files
  eleventyConfig.ignores.add("./src/assets/**/*");
  eleventyConfig.watchIgnores.add("./src/assets/**/*");

  // Eleventy server config
  eleventyConfig.setServerOptions({
    watch: ["./dist/assets/css/**/*.css", "./dist/assets/js/**/*.js"],
    port: 3000,
  });

  // Config overrides
  return {
    dir: {
      input: "./src",
      output: "./dist",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
