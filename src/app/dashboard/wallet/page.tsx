import { Grid } from '@mui/material';
import TransactionCard from 'src/components/transaction-card';
import { CONFIG } from 'src/config-global';

import { BlankView } from 'src/sections/blank/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Wallet - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TransactionCard
            title="Total Transactions"
            value="AED 207,800"
            color="#FDB721" // Orange
            icon={<span style={{ fontSize: 24 }}>↓</span>} // Down arrow icon
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TransactionCard
            title="Completed Transactions"
            value="AED 207,800"
            color="#4CAF50" // Green
            icon={<span style={{ fontSize: 24 }}>↑</span>} // Up arrow icon
          />
        </Grid>
      </Grid>
    </>
  );
}
