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
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: 'Overview 6.0.0',
    items: [
      { title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
      { title: 'Bookings', path: paths.dashboard.bookings, icon: ICONS.ecommerce },
      { title: 'Our Clients', path: paths.dashboard.clients, icon: ICONS.analytics },
      { title: 'Reports', path: paths.dashboard.reports, icon: ICONS.analytics },
      { title: 'Wallet', path: paths.dashboard.wallet, icon: ICONS.analytics },
    ],
  },
  {
    subheader: 'Inventory',
    items: [
      { title: 'Classes', path: paths.dashboard.classes, icon: ICONS.dashboard },
      { title: 'Training Sessions', path: paths.dashboard.trainingsessions, icon: ICONS.ecommerce },
      { title: 'DayPasses', path: paths.dashboard.daypasses, icon: ICONS.analytics },
      { title: 'Membership', path: paths.dashboard.membership, icon: ICONS.dashboard },
      { title: 'Amenities', path: paths.dashboard.amenities, icon: ICONS.ecommerce },
      { title: 'Promotions', path: paths.dashboard.promotions, icon: ICONS.analytics },
      { title: 'Reviews', path: paths.dashboard.reviews, icon: ICONS.analytics },
    ],
  },
  /**
   * Management
   */
  // {
  //   subheader: 'Management',
  //   items: [
  //     {
  //       title: 'Group',
  //       path: paths.dashboard.group.root,
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'Four', path: paths.dashboard.group.root },
  //         { title: 'Five', path: paths.dashboard.group.five },
  //         { title: 'Six', path: paths.dashboard.group.six },
  //       ],
  //     },
  //   ],
  // },
];
