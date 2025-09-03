import React from 'react';
import { Transaction } from '../types';

const TransactionRow: React.FC<{ transaction: Transaction; onClick: () => void; }> = ({ transaction, onClick }) => {
    const isPositive = transaction.amount > 0;
    const amountColor = isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
    const sign = isPositive ? '+' : '';

    return (
        <button 
            onClick={onClick} 
            className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700/50 rounded-lg transition-colors duration-200 px-2 -mx-2"
            aria-label={`View details for transaction: ${transaction.description}`}
        >
            <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 dark:text-white truncate">{transaction.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(transaction.timestamp).toLocaleString()}</p>
            </div>
            <div className={`text-right font-semibold ${amountColor} pl-4`}>
                {sign}{transaction.amount.toLocaleString()} {transaction.currency}
            </div>
        </button>
    );
};

export default TransactionRow;