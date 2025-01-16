import { NextResponse } from 'next/server';
import { WalletData } from 'src/types/walletTypes';
import transactions from 'src/data/transactions.json';
import revenue from 'src/data/revenue.json';
import bankInfo from 'src/data/bankInfo.json';

export async function GET() {
  const data: WalletData = {
    transactions,
    revenue,
    bankInfo,
  };
  return NextResponse.json(data);
}
