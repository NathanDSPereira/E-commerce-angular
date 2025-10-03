
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7726, hash: '0940d6dd7889a8e2a7e9af661419ee3fdc8e4bfce7652b9092f9ba888056e76b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '4506b013b8ff95519e503b25f12c177feed29d44b0b7df14500f8112102719af', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DNO5H2ER.css': {size: 27154, hash: '8qzcw5IQkoI', text: () => import('./assets-chunks/styles-DNO5H2ER_css.mjs').then(m => m.default)}
  },
};
