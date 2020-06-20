const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: sveltePreprocess({
    typescript: {
      // skip type checking, except in production
      transpileOnly: process.env.NODE_ENV !== "production",
    },
  }),
};
