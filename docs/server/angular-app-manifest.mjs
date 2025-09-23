
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7646, hash: '7b978f857e25f2d9d460a2cfdf9dbe15ab538b465fb7ba8a7c23453ad4ec6df2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'fe674e7db099cac25a9f2e61d16e7aea51a71ed9f4af714b735a553a3c9d44db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IKHWC3SB.css': {size: 25824, hash: 'eVDtrDnhxlo', text: () => import('./assets-chunks/styles-IKHWC3SB_css.mjs').then(m => m.default)}
  },
};
