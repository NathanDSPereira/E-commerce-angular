
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7812, hash: '69a267a7349153ad244112c6e6dada9a62f4eaeb9188de8bb9645e1f655ecd8a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: 'b135197c86eadafb89d59a09280a6c77d13e0ea57d639e6a78bc6b27cc695a8e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3TLDAG5O.css': {size: 27543, hash: 'Sol12UvtCqg', text: () => import('./assets-chunks/styles-3TLDAG5O_css.mjs').then(m => m.default)}
  },
};
