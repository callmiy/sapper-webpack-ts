const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: sveltePreprocess({
    typescript: {
      // skip type checking
      transpileOnly: true,
    },
  }),
};
