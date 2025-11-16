
import React from 'react';

interface CardProps {
  title: string;
  value: string;
  isPrimary?: boolean;
}

const Card: React.FC<CardProps> = ({ title, value, isPrimary = false }) => {
  const bgColor = isPrimary ? 'bg-amber-700' : 'bg-white';
  const textColor = isPrimary ? 'text-white' : 'text-gray-600';
  const valueColor = isPrimary ? 'text-white' : 'text-gray-900';
  const border = isPrimary ? '' : 'border border-gray-200';

  return (
    <div className={`p-4 rounded-lg shadow-sm ${bgColor} ${border}`}>
      <h3 className={`text-sm font-semibold ${textColor}`}>{title}</h3>
      <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
    </div>
  );
};

export default Card;