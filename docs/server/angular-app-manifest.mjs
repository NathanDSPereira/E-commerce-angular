
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-commerce-angular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 20697, hash: '21b996b165f82c3c7c5c928bf0982d43ee0d842826d47839cf457dc11c85f158', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 12058, hash: '4385a8007f04a192aa0605fe211f71c9ea481efb37a6384799849fd9ceb7f83a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UXFL3KLT.css': {size: 39709, hash: 'FoZ9L9ZgINM', text: () => import('./assets-chunks/styles-UXFL3KLT_css.mjs').then(m => m.default)}
  },
};
