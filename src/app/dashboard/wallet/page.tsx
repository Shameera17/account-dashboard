import { Grid, Stack } from '@mui/material';

import { CONFIG } from 'src/config-global';
import BankInformation from 'src/sections/bank-information';
import { OverviewBankingView } from 'src/sections/banking/view';
import Transactions from 'src/sections/transactions';

export const metadata = { title: `Wallet - ${CONFIG.appName}` };

export default function Page() {
  return (
    <Stack display={'flex'} padding={'20px 30px'} rowGap={'60px'}>
      <Grid container justifyContent="space-between" spacing={2}>
        <Grid item xs={12} md={9}>
          <Transactions />
        </Grid>
        <Grid item xs={12} md={3}>
          <BankInformation />
        </Grid>
      </Grid>

      <OverviewBankingView />
    </Stack>
  );
}
