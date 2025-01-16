import React from 'react';
import BankCard from 'src/components/bank-card';

const BankInformation = () => {
  return (
    <div>
      BankInformation
      <BankCard
        bankName="Barclay Bank"
        cardNumber="************1124"
        cardType="Savings"
        isActive={true}
      />
    </div>
  );
};

export default BankInformation;
