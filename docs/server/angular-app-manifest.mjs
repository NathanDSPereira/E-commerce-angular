
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 20760, hash: '5b5efee210ab47a80ee6b11485642e4ae549322e46741ce6f1db0f7b64e87323', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12058, hash: '95514cef7bfe766941af0e560388971b0747b27035b44c05ed3b27f91e316559', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OKSSYTEH.css': {size: 40252, hash: 'VZcMli2FCig', text: () => import('./assets-chunks/styles-OKSSYTEH_css.mjs').then(m => m.default)}
  },
};
