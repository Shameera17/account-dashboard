import { NextResponse } from 'next/server';
import { Transaction } from 'src/types/walletTypes';
import transactions from 'src/data/transactions.json';

export async function GET() {
  const data: Transaction[] = transactions;
  return NextResponse.json(data);
}
