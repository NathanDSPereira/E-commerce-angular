
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 7534, hash: '84a295a011213e85d7c34ee219ed0798006d13517c195e4eb6c2b984058889a1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '3730f57f7c43cc482e0b89e7e577b3f2d434762436df0f37b6a453b8f10f325b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-PWPWXYMS.css': {size: 25317, hash: '6JVHlOK+/Ag', text: () => import('./assets-chunks/styles-PWPWXYMS_css.mjs').then(m => m.default)}
  },
};
