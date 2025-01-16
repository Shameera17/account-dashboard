import { NextResponse } from 'next/server';
import { BankInfo } from 'src/types/walletTypes';
import bankInfo from 'src/data/bankInfo.json';

export async function GET() {
  const data: BankInfo[] = bankInfo;
  return NextResponse.json(data);
}
