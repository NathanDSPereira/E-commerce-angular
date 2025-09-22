
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7646, hash: '5cf8d412a21573e79f8eabc04df294cec16bfd74d94f230adec0b75fb89871cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '2b2df5e7fbf01bcc9dadd05000ebe52957f94beecfb3738687d7e71cb820b991', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6GIP75EJ.css': {size: 25824, hash: 'OxgRnLsV6VA', text: () => import('./assets-chunks/styles-6GIP75EJ_css.mjs').then(m => m.default)}
  },
};
