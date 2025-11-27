
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 20737, hash: '7b30c7c9c46a99706df040ffa1d0e155568b62a1ba9426c87d9dc60aac5f4373', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12058, hash: '003579d1020e793bc8c2512d6908e29ff690c4224122e418651811bcac5a073c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XATN2KIL.css': {size: 43075, hash: 'Ai0/niYi6OE', text: () => import('./assets-chunks/styles-XATN2KIL_css.mjs').then(m => m.default)}
  },
};
