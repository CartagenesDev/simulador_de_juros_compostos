
import { useState } from 'react';
import { type FormData, type CalculationResult, RateType, PeriodType, type ChartDataPoint } from '../types';

const useCompoundInterest = () => {
    const [error, setError] = useState<string | null>(null);

    const calculate = (data: FormData): CalculationResult | null => {
        setError(null);
        const { initialValue, monthlyValue, interestRate, rateType, period, periodType } = data;

        if (interestRate <= 0 || period <= 0) {
            setError("Taxa de juros e período devem ser maiores que zero.");
            return null;
        }

        const monthlyRate = rateType === RateType.Annual ? Math.pow(1 + interestRate / 100, 1 / 12) - 1 : interestRate / 100;
        const totalMonths = periodType === PeriodType.Years ? period * 12 : period;

        let currentBalance = initialValue;
        let totalInvested = initialValue;
        let totalInterest = 0;
        const chartData: ChartDataPoint[] = [{
            period: 0,
            totalInvested: initialValue,
            totalInterest: 0,
            finalValue: initialValue,
            monthlyInterest: 0,
        }];

        for (let i = 1; i <= totalMonths; i++) {
            const interestEarned = currentBalance * monthlyRate;
            currentBalance += interestEarned + monthlyValue;
            totalInterest += interestEarned;
            totalInvested += monthlyValue;
            
            chartData.push({
                period: i,
                totalInvested: totalInvested,
                totalInterest: totalInterest,
                monthlyInterest: interestEarned,
                finalValue: currentBalance,
            });
        }
        
        const finalResult: CalculationResult = {
            finalValue: currentBalance,
            totalInvested: totalInvested,
            totalInterest: totalInterest,
            chartData,
        };
        
        return finalResult;
    };

    return { calculate, error };
};

export default useCompoundInterest;