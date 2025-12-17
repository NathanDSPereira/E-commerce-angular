
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 20826, hash: '266e616ca1ea0a2ac1b7e4ce93ae3cacd585c0bda2bca4e025a0907aee3408f5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12058, hash: 'ea85aaded7d1052723c88cf22400827faa1948460b8dd0420867eb95adbe3ef3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AJR2FZIO.css': {size: 40793, hash: '23V8gNj/jpg', text: () => import('./assets-chunks/styles-AJR2FZIO_css.mjs').then(m => m.default)}
  },
};
