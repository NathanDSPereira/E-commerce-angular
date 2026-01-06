
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 20970, hash: '31373ee1b39791d1284e6cdfc6fb9b2078622f2a7de86b585f73ad2b209dc911', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12058, hash: 'd82838895be80c4fc99daef3c1cd3b90add2da7d1d354c5b1f54557a33f74592', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-4TWPJWP5.css': {size: 42153, hash: '/eA4OwgJf/M', text: () => import('./assets-chunks/styles-4TWPJWP5_css.mjs').then(m => m.default)}
  },
};
