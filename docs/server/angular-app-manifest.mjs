
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7812, hash: '9d01b073bea75ca0096dfb9e2daf9bb9099b24205ce6ad1085f27a86591bb6c7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '9ad828e9039d170b0c3d00f6303bac94f0c571c2619dfa4a8e015c44b8968dc4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UOLU4X2V.css': {size: 28805, hash: 'jYtvfrIaqrE', text: () => import('./assets-chunks/styles-UOLU4X2V_css.mjs').then(m => m.default)}
  },
};
