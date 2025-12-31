
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 20826, hash: '35add5965140e64f4e9bc1d52e1f8d0cb5f642400615c5e47b2660dc06da7511', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12058, hash: '0407133c82220af18bcdaf404de1f476ebdd62b30348ec5db514934425027e39', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YEMQIFHK.css': {size: 41097, hash: 'yHjiV4pPR7k', text: () => import('./assets-chunks/styles-YEMQIFHK_css.mjs').then(m => m.default)}
  },
};
