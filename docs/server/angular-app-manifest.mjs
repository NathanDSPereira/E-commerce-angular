
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-agular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7811, hash: '5b49b16f784763c607388cb672452b8c51f7111568acddbb4702194f8171ad8f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: '5b0c69f017f7df168717ace3697c7e5c7d467adcf90999b4b29bb5746bca3d90', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-52M4VQC6.css': {size: 28099, hash: 'RLH9ja0cWKA', text: () => import('./assets-chunks/styles-52M4VQC6_css.mjs').then(m => m.default)}
  },
};
