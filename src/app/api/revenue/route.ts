import { NextResponse } from 'next/server';
import { Revenue } from 'src/types/walletTypes';
import revenue from 'src/data/revenue.json';

export async function GET() {
  const data: Revenue = revenue;
  return NextResponse.json(data);
}
