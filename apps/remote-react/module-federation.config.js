// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'remote-react',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  
};

module.exports = moduleFederationConfig;
