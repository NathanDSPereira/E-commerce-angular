
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7682, hash: '772a56dc6c42917865992c8c25111911d1a58d1cada2dabcbd7e31167e37e199', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '336b7a2ae4864337330967b7d6ed291ab6e0f3e445c25233e3d60ed856e1db6a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YW3WWD3P.css': {size: 26291, hash: 'S25YfwoBnLs', text: () => import('./assets-chunks/styles-YW3WWD3P_css.mjs').then(m => m.default)}
  },
};
