import { Box, Button, Grid, Typography } from '@mui/material';
import { ArrowBottomLeftIcon, ArrowTopRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import React from 'react';
import TransactionCard from 'src/components/transaction-card';
import { CONFIG } from 'src/config-global';

const Transactions = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <TransactionCard
          secondaryColor="#FF9518"
          title="Total Transactions"
          value="AED 207,800"
          color="#FF951833" // Orange
          icon={
            <span style={{ fontSize: 24, color: 'white' }}>
              <ArrowBottomLeftIcon />
            </span>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TransactionCard
          title="Completed Transactions"
          secondaryColor="#00D789"
          value="AED 207,800"
          color="#00D7891A" // Green
          icon={
            <span style={{ fontSize: 24, color: 'white' }}>
              <ArrowTopRightIcon />
            </span>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TransactionCard
          title="Amount Pending"
          secondaryColor="#1867FF"
          value="AED 207,800"
          color="#1867FF1A" // Green
          icon={
            <span style={{ fontSize: 24 }}>
              {' '}
              <span style={{ fontSize: 24, color: 'white' }}>
                <ArrowBottomLeftIcon />
              </span>
            </span>
          }
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box
          sx={{
            flexGrow: 1,
            height: '90px',
            display: 'flex',
            gap: 2,
            padding: '15px 30px',
            flexDirection: 'row',
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
            borderRadius: '2px',
            alignItems: 'center',
          }}
        >
          <img src={`${CONFIG.assetsDir}/assets/icons/wallet/wallet.svg`} alt={''} />
          <div>
            <Typography variant="body2" color="text.secondary">
              Cleared funds
            </Typography>
            <Typography variant="h6" component="h2">
              AED 207,800
            </Typography>
          </div>
          <Button variant="contained" sx={{ marginLeft: 'auto', height: '40px' }}>
            Withdraw
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Transactions;
