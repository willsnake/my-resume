/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    [
      '@snowpack/plugin-build-script',
      { cmd: 'postcss', input: ['.css'], output: ['.css'] },
    ],
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-optimize',
    '@snowpack/plugin-postcss',
    [
      'snowpack-plugin-rollup-bundle',
      {
        emitHtmlFiles: true,
        preserveSourceFiles: false,
        entrypoints: 'build/**/*.js',
      },
    ],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    clean: true,
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
}
