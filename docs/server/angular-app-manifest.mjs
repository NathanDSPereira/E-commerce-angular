
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5545, hash: '8868b7d35c2d7038000d23714b896fee525c1da244ef90ad3f84d0b45f398c65', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '475743dc105a70dc632efc0a28d198d00160a71389464274e8a975b4afbe3e74', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-2D2EGGL7.css': {size: 14742, hash: 'rJeFwoAZfY4', text: () => import('./assets-chunks/styles-2D2EGGL7_css.mjs').then(m => m.default)}
  },
};
