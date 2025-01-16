import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import TransactionCard from 'src/components/transaction-card';
import { CONFIG } from 'src/config-global';

const Transactions = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <TransactionCard
          title="Total Transactions"
          value="AED 207,800"
          color="#FDB721" // Orange
          icon={<span style={{ fontSize: 24 }}>↓</span>} // Down arrow icon
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TransactionCard
          title="Completed Transactions"
          value="AED 207,800"
          color="#4CAF50" // Green
          icon={<span style={{ fontSize: 24 }}>↑</span>} // Up arrow icon
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TransactionCard
          title="Amount Pending"
          value="AED 207,800"
          color="#4CAF50" // Green
          icon={<span style={{ fontSize: 24 }}>↑</span>} // Up arrow icon
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box sx={{ flexGrow: 1 }} display={'flex'} gap={2} flexDirection={'row'}>
          <img
            src={`${CONFIG.assetsDir}/assets/icons/wallet/wallet.svg`}
            // width={24}
            // height={24}
            alt={''}
          />
          <div>
            <Typography variant="body2" color="text.secondary">
              Cleared funds
            </Typography>
            <Typography variant="h6" component="h2">
              AED 207,800
            </Typography>
          </div>
          <Button variant="contained" sx={{ marginLeft: 'auto' }}>
            Withdraw
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Transactions;
