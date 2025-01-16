import { Container, Grid, Stack } from '@mui/material';
import TransactionCard from 'src/components/transaction-card';
import { CONFIG } from 'src/config-global';
import BankInformation from 'src/sections/bank-information';
import RevenueChart from 'src/sections/chart';
import Transactions from 'src/sections/transactions';

export const metadata = { title: `Wallet - ${CONFIG.appName}` };

export default function Page() {
  return (
    <Stack display={'flex'} padding={'20px 30px'} rowGap={'60px'}>
      <Grid container justifyContent="space-between" spacing={2}>
        <Grid item xs={12} md={8}>
          <Transactions />
        </Grid>
        <Grid item xs={12} md={4}>
          <BankInformation />
        </Grid>
      </Grid>
      <section>
        {/* Revenue overview */}
        <RevenueChart />
      </section>
      <section>{/* Income Segment */}</section>
      <section>{/* Transactions table */}</section>
    </Stack>
  );
}
