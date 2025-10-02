
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7726, hash: '611a12b5f9358bb709429e379a46250885b60cb8594d49bb229588cef64c0308', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'd21b2ee330506dc4f0566b2ced11104d93b037074655c561406b2fed18ba516a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DNO5H2ER.css': {size: 27154, hash: '8qzcw5IQkoI', text: () => import('./assets-chunks/styles-DNO5H2ER_css.mjs').then(m => m.default)}
  },
};
