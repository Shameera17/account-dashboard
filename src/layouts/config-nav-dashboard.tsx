import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  pricetag: icon('pricetag'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  training: icon('training'),
  review: icon('review'),
  folder: icon('ic-folder'),
  wallet: icon('wallet'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  classes: icon('classes'),
  daypass: icon('daypass'),
  calendar: icon('ic-calendar'),
  badge: icon('badge'),
  external: icon('ic-external'),
  water: icon('water'),
  ecommerce: icon('calendar'),
  analytics: icon('user'),
  dashboard: icon('dashboard'),
  parameter: icon('ic-parameter'),
  reports: icon('message'),
  group: icon('group'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: '',
    items: [
      { title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
      { title: 'Bookings', path: paths.dashboard.bookings, icon: ICONS.ecommerce },
      { title: 'Our Clients', path: paths.dashboard.clients, icon: ICONS.analytics },
      { title: 'Employees', path: paths.dashboard.reports, icon: ICONS.group },
      { title: 'Reports', path: paths.dashboard.reports, icon: ICONS.reports },
      { title: 'Wallet', path: paths.dashboard.wallet, icon: ICONS.wallet },
    ],
  },
  {
    subheader: 'Inventory',
    items: [
      { title: 'Classes', path: paths.dashboard.classes, icon: ICONS.classes },
      { title: 'Training Sessions', path: paths.dashboard.trainingsessions, icon: ICONS.training },
      { title: 'DayPasses', path: paths.dashboard.daypasses, icon: ICONS.daypass },
      { title: 'Membership', path: paths.dashboard.membership, icon: ICONS.water },
      { title: 'Amenities', path: paths.dashboard.amenities, icon: ICONS.ecommerce },
      { title: 'Promotions', path: paths.dashboard.promotions, icon: ICONS.pricetag },
      { title: 'Reviews', path: paths.dashboard.reviews, icon: ICONS.review },
    ],
  },
];
