
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 20654, hash: 'dcd359dd682622cd30e52bbd8ef357d2e8788846d34c7d34bf2c5e6fae39371b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12058, hash: 'aa587ac21d267f5991092c8579a642d5cb7544c35ca2686105f43ea9c6a515bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FWVNSHW5.css': {size: 38840, hash: '0A3QQOSPRQ0', text: () => import('./assets-chunks/styles-FWVNSHW5_css.mjs').then(m => m.default)}
  },
};
