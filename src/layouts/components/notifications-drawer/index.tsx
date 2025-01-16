'use client';

import type { IconButtonProps } from '@mui/material/IconButton';

import { m } from 'framer-motion';
import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useBoolean } from 'src/hooks/use-boolean';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { varHover } from 'src/components/animate';
import { Scrollbar } from 'src/components/scrollbar';
import { CustomTabs } from 'src/components/custom-tabs';

import { NotificationItem } from './notification-item';

import type { NotificationItemProps } from './notification-item';

// ----------------------------------------------------------------------

const TABS = [
  { value: 'all', label: 'All', count: 22 },
  { value: 'unread', label: 'Unread', count: 12 },
  { value: 'archived', label: 'Archived', count: 10 },
];

// ----------------------------------------------------------------------

export type NotificationsDrawerProps = IconButtonProps & {
  data?: NotificationItemProps[];
};

export function NotificationsDrawer({ data = [], sx, ...other }: NotificationsDrawerProps) {
  const drawer = useBoolean();

  const [currentTab, setCurrentTab] = useState('all');

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  const [notifications, setNotifications] = useState(data);

  const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, isUnRead: false })));
  };

  const renderHead = (
    <Stack direction="row" alignItems="center" sx={{ py: 2, pl: 2.5, pr: 1, minHeight: 68 }}>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Notifications
      </Typography>

      {!!totalUnRead && (
        <Tooltip title="Mark all as read">
          <IconButton color="primary" onClick={handleMarkAllAsRead}>
            <Iconify icon="eva:done-all-fill" />
          </IconButton>
        </Tooltip>
      )}

      <IconButton onClick={drawer.onFalse} sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
        <Iconify icon="mingcute:close-line" />
      </IconButton>

      <IconButton>
        <Iconify icon="solar:settings-bold-duotone" />
      </IconButton>
    </Stack>
  );

  const renderTabs = (
    <CustomTabs variant="fullWidth" value={currentTab} onChange={handleChangeTab}>
      {TABS.map((tab) => (
        <Tab
          key={tab.value}
          iconPosition="end"
          value={tab.value}
          label={tab.label}
          icon={
            <Label
              variant={((tab.value === 'all' || tab.value === currentTab) && 'filled') || 'soft'}
              color={
                (tab.value === 'unread' && 'info') ||
                (tab.value === 'archived' && 'success') ||
                'default'
              }
            >
              {tab.count}
            </Label>
          }
        />
      ))}
    </CustomTabs>
  );

  const renderList = (
    <Scrollbar>
      <Box component="ul">
        {notifications?.map((notification) => (
          <Box component="li" key={notification.id} sx={{ display: 'flex' }}>
            <NotificationItem notification={notification} />
          </Box>
        ))}
      </Box>
    </Scrollbar>
  );

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={drawer.onTrue}
        sx={sx}
        {...other}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <SvgIcon>
            {/* https://icon-sets.iconify.design/solar/bell-bing-bold-duotone/ */}
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.48812 1.34375C5.19747 1.34375 3.42517 3.35139 3.70929 5.62435L3.76282 6.05262C3.84115 6.6793 3.61224 7.30526 3.14811 7.73355C2.18634 8.62106 1.91913 10.0336 2.49029 11.2111L2.56001 11.3549C3.06336 12.3926 4.08543 13.0721 5.22639 13.1431L5.3534 13.3609C6.03663 14.5321 7.10116 15.1731 8.219 15.1731C9.33684 15.1731 10.4014 14.5321 11.0846 13.3609L11.2136 13.1397C12.172 13.064 13.0458 12.543 13.567 11.7241C14.3645 10.4711 14.1533 8.82727 13.065 7.81654L13.0353 7.78905C12.5371 7.32636 12.2918 6.65229 12.3762 5.97761L12.4198 5.62888C12.7042 3.35351 10.93 1.34375 8.63692 1.34375H7.48812ZM5.51099 12.1374C5.51708 12.1373 5.52316 12.1373 5.52923 12.1374H10.9088C10.9148 12.1373 10.9209 12.1373 10.927 12.1374H10.9706C11.6769 12.1374 12.3342 11.7766 12.7134 11.1808C13.2486 10.3398 13.1068 9.23642 12.3764 8.55802L12.3467 8.53052C11.6101 7.84638 11.2474 6.84969 11.3721 5.8521L11.4157 5.50337C11.6246 3.83196 10.3213 2.35565 8.63692 2.35565H7.48812C5.80613 2.35565 4.50475 3.82983 4.71338 5.49884L4.76691 5.92711C4.88575 6.87783 4.53847 7.82745 3.83435 8.47721C3.20039 9.06223 3.02425 9.99335 3.40074 10.7695L3.47046 10.9132C3.83364 11.662 4.59267 12.1374 5.42485 12.1374H5.51099ZM8.219 14.1612C7.5976 14.1612 6.93461 13.8493 6.42236 13.1493H10.0156C9.50339 13.8493 8.8404 14.1612 8.219 14.1612Z"
                fill="#111111"
              />
            </svg>
          </SvgIcon>
        </Badge>
      </IconButton>

      <Drawer
        open={drawer.value}
        onClose={drawer.onFalse}
        anchor="right"
        slotProps={{ backdrop: { invisible: true } }}
        PaperProps={{ sx: { width: 1, maxWidth: 420 } }}
      >
        {renderHead}

        {renderTabs}

        {renderList}

        <Box sx={{ p: 1 }}>
          <Button fullWidth size="large">
            View all
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
