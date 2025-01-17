export interface Transaction {
  description: string;
  transactionId: string;
  type: string;
  date: string;
  status: string;
  amount: number;
  avatarUrl: string;
  fullname: string;
}

export interface Revenue {
  previous: number[];
  next: number[];
  months: string[];
}

export interface BankInfo {
  bankName: string;
  accountNumber: string;
  type: string;
  status: string;
}

export interface WalletData {
  transactions: Transaction[];
  revenue: Revenue;
  bankInfo: BankInfo[];
}
