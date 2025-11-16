export enum RateType {
  Annual = 'annual',
  Monthly = 'monthly',
}

export enum PeriodType {
  Years = 'years',
  Months = 'months',
}

export interface FormData {
  initialValue: number;
  monthlyValue: number;
  interestRate: number;
  rateType: RateType;
  period: number;
  periodType: PeriodType;
}

export interface ChartDataPoint {
  period: number;
  totalInvested: number;
  totalInterest: number;
  finalValue: number;
  monthlyInterest: number;
}

export interface CalculationResult {
  finalValue: number;
  totalInvested: number;
  totalInterest: number;
  chartData: ChartDataPoint[];
}