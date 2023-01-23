import routeUtil from '../../../util/route.util';

export const vpsItems = [
  { name: 'Linux VPS', link: `/linux-vps/` },
  { name: 'Windows VPS', link: `/windows-vps/` },
  { name: 'RDP VPS', link: `/buy-rdp/` },
  { name: 'Forex VPS', link: `/forex-vps/` },
  { name: 'Cloud Server', link: `/cloud/` },
  { name: 'More', link: `#` },
];

export const moreProducts = [
  { name: 'Mikrotik VPS', link: `/mikrotik-vps/` },
  { name: 'Android VPS', link: `/bluestacks-vps/` },
];

export const pages = [
  { name: 'Blog', link: '/blog/' },
  { name: 'About Us', link: '/about-us/' },
];

export const getStarted = {
  name: 'Pricing',
  sectionId: 'pricing',
  fallback: '/',
  validPages: {
    templateType: ['locations', 'landings', 'cloud'],
    pages: ['/'],
  },
};

export const signInContent = {
  CLOUD_LOGIN: {
    text: 'SIGN IN TO CLOUD VPS PANEL',
    remoteLink: routeUtil.normalizeWithPostfix(
      process.env.GATSBY_CLOUDZY_PANEL_URL,
      '/',
    ),
  },
  VPS_LOGIN: {
    text: 'SIGN IN TO WHMCS PANEL',
    remoteLink: routeUtil.normalizeWithPostfix(
      process.env.GATSBY_WHMCS_PANEL_URL,
      '/',
    ),
  },
  DESCRIPTION: {
    text: `Cloud users can sign in to the cloud panel by clicking on the "SIGN IN TO CLOUD PANEL" button.`,
  },
  SIGN_IN_PAGE: {
    text: 'sign in',
    link: '/sign-in',
  },
};
