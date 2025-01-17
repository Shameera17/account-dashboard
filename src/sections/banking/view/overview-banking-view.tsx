'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';
import { _bankingContacts, _bankingCreditCard, _bankingRecentTransitions } from 'src/_mock';

import { Iconify } from 'src/components/iconify/iconify';

import { BankingContacts } from '../banking-contacts';
import { BankingQuickTransfer } from '../banking-quick-transfer';
import { BankingInviteFriends } from '../banking-invite-friends';
import { BankingCurrentBalance } from '../banking-current-balance';
import { BankingBalanceStatistics } from '../banking-balance-statistics';
import { BankingRecentTransitions } from '../banking-recent-transitions';
import { BankingExpensesCategories } from '../banking-expenses-categories';
import { Button } from '@mui/material';
import TransactionTab from 'src/sections/transaction-tabs';

// ----------------------------------------------------------------------

export function OverviewBankingView() {
  return (
    <Grid container spacing={3}>
      <Grid xs={12} md={8} lg={8}>
        <BankingBalanceStatistics
          title="Revenue Overview"
          subheader=""
          chart={{
            series: [
              {
                name: 'Weekly',
                categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                data: [
                  { name: 'Previous', data: [24, 41, 35, 151, 49] },
                  { name: 'Next', data: [24, 56, 77, 88, 99] },
                ],
              },
              {
                name: 'Monthly',
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                data: [
                  { name: 'Previous', data: [83, 112, 119, 88, 103, 112, 114, 108, 93] },
                  { name: 'Next', data: [46, 46, 43, 58, 40, 59, 54, 42, 51] },
                ],
              },
              {
                name: 'Yearly',
                categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
                data: [
                  { name: 'Previous', data: [76, 42, 29, 41, 27, 96] },
                  { name: 'Next', data: [46, 44, 24, 43, 44, 43] },
                ],
              },
            ],
          }}
        />
      </Grid>
      <Grid xs={12} md={12} lg={12}>
        <BankingExpensesCategories
          title="Incoming Segment"
          chart={{
            series: [
              { label: 'Entertainment', value: 22 },
              { label: 'Fuel', value: 18 },
              { label: 'Fast food', value: 16 },
              { label: 'Cafe', value: 17 },
              { label: 'Сonnection', value: 14 },
              { label: 'Healthcare', value: 22 },
              { label: 'Fitness', value: 10 },
              { label: 'Supermarket', value: 21 },
            ],
            icons: [
              <Iconify icon="streamline:dices-entertainment-gaming-dices-solid" />,
              <Iconify icon="maki:fuel" />,
              <Iconify icon="ion:fast-food" />,
              <Iconify icon="maki:cafe" />,
              <Iconify icon="basil:mobile-phone-outline" />,
              <Iconify icon="solar:medical-kit-bold" />,
              <Iconify icon="ic:round-fitness-center" />,
              <Iconify icon="solar:cart-3-bold" />,
            ],
          }}
        />
      </Grid>
      <Grid xs={12} md={12} lg={12}>
        <TransactionTab />
      </Grid>
    </Grid>
  );
}
