import { Stack, Typography } from '@mui/material';
import React from 'react';
import BankCard from 'src/components/bank-card';

const BankInformation = () => {
  return (
    <Stack rowGap={1}>
      <Typography variant="h6" component="h2">
        Bank Information
      </Typography>
      <BankCard
        bankName="Barclay Bank"
        cardNumber="************1124"
        cardType="Savings"
        isActive={true}
      />
      <BankCard
        bankName="Barclay Bank"
        cardNumber="************1124"
        cardType="Savings"
        isActive={true}
      />
    </Stack>
  );
};

export default BankInformation;
