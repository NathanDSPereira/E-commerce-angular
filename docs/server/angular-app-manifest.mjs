
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 6379, hash: 'a31f237dc762150f25bb0b7a4db1a5845d4ac7028dfefee69926a4ffd05d95e2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1026, hash: '8c582bfed931405e622771c846daa0b946331ad171d4a4b4fa6f4dc0c91822da', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6REPDTVZ.css': {size: 20448, hash: '+144az7DywQ', text: () => import('./assets-chunks/styles-6REPDTVZ_css.mjs').then(m => m.default)}
  },
};
