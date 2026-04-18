export type DebtStatus = 'pending' | 'in_progress' | 'legal' | 'recovered' | 'written_off';

export interface PaymentInstallment {
  id: string;
  dueDate: string;
  amount: number;
  status: 'paid' | 'overdue' | 'planned';
}

export interface DebtCase {
  id: string;
  debtorName: string;
  taxCode: string; // Codice Fiscale / P.IVA
  originalAmount: number;
  currentBalance: number;
  status: DebtStatus;
  lastContactDate: string;
  installments?: PaymentInstallment[];
}