
import React, { useEffect } from 'react';
import { Transaction } from '../types';
import Card from './Card';

interface TransactionModalProps {
  transaction: Transaction;
  onClose: () => void;
}

const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const TransactionModal: React.FC<TransactionModalProps> = ({ transaction, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);
    
    if (!transaction) return null;

    const isPositive = transaction.amount > 0;
    const amountColor = isPositive ? 'text-green-400' : 'text-red-400';
    const sign = isPositive ? '+' : '';
    const formattedAmount = `${sign}${transaction.amount.toLocaleString()} ${transaction.currency}`;
    const formattedTimestamp = new Date(transaction.timestamp).toLocaleString(undefined, {
        dateStyle: 'full',
        timeStyle: 'long'
    });

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="transaction-modal-title"
            className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 transition-opacity animate-[fade-in_0.2s_ease-out]"
            onClick={onClose}
        >
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-up {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
            <div
                className="relative w-full max-w-md mx-4 animate-[slide-up_0.3s_ease-out]"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <Card titleClassName="pr-10" title="Transaction Details" className="relative border-2 border-brand-primary/20">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                        <XIcon className="w-6 h-6" />
                    </button>
                    <div className="space-y-5 mt-2 text-gray-200">
                        <div>
                            <p className="text-sm text-gray-400">Description</p>
                            <p className="font-semibold text-lg text-white">{transaction.description}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-400">Amount</p>
                                <p className={`font-bold text-xl ${amountColor}`}>{formattedAmount}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Type</p>
                                <p className="font-semibold text-lg capitalize bg-gray-700 inline-block px-2 py-1 rounded">
                                    {transaction.type}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Transaction ID</p>
                            <p className="font-mono text-xs text-gray-300 break-all bg-gray-900 p-2 rounded-md">
                                {transaction.id}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Timestamp</p>
                            <p className="font-semibold">{formattedTimestamp}</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default TransactionModal;
