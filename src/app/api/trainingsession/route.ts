import { NextResponse } from 'next/server';
import trainingsessioninfo from 'src/data/trainingsessioninfo.json';
import { Session } from 'src/types/product';

export async function GET() {
  const data: Session[] = trainingsessioninfo;
  return NextResponse.json(data);
}
