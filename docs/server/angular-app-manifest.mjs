
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7682, hash: 'ca7acc524e03e5062fadfd279f4a9a181ec13c5aea1df87053be79a2a1a5a255', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '6bd1233f92f33dbe38e3b791b895f05a1975da592eeab782af03f95c3f77348a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-VOP37R66.css': {size: 26447, hash: '3PCJnP+DyBk', text: () => import('./assets-chunks/styles-VOP37R66_css.mjs').then(m => m.default)}
  },
};
