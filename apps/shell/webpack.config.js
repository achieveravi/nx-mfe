const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  remotes: [
    ['remote-react', 'http://localhost:4202/remoteEntry.js'],
    ['remote-angular', 'http://localhost:4201/remoteEntry.mjs'],
  ],
});
