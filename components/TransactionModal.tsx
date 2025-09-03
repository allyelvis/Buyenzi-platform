
import React, { useEffect } from 'react';
import { Transaction } from '../types';
import Card from './Card';

interface TransactionModalProps {
  transaction: Transaction;
  onClose: () => void;
  onDelete: (transactionId: string) => void;
}

const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const TrashIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
);


const TransactionModal: React.FC<TransactionModalProps> = ({ transaction, onClose, onDelete }) => {
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
    
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this transaction? This action cannot be undone.')) {
            onDelete(transaction.id);
        }
    };

    const isPositive = transaction.amount > 0;
    const amountColor = isPositive ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400';
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
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity animate-[fade-in_0.2s_ease-out]"
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
                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                        <XIcon className="w-6 h-6" />
                    </button>
                    <div className="space-y-5 mt-2 text-gray-700 dark:text-gray-200">
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Description</p>
                            <p className="font-semibold text-lg text-gray-900 dark:text-white">{transaction.description}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Amount</p>
                                <p className={`font-bold text-xl ${amountColor}`}>{formattedAmount}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Type</p>
                                <p className="font-semibold text-lg capitalize bg-gray-100 dark:bg-gray-700 inline-block px-2 py-1 rounded">
                                    {transaction.type}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Transaction ID</p>
                            <p className="font-mono text-xs text-gray-600 dark:text-gray-300 break-all bg-gray-100 dark:bg-gray-900 p-2 rounded-md">
                                {transaction.id}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Timestamp</p>
                            <p className="font-semibold">{formattedTimestamp}</p>
                        </div>
                         <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <button
                                onClick={handleDelete}
                                className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-red-500 dark:text-red-400 bg-red-500/10 hover:bg-red-500/20 py-2.5 rounded-lg transition-colors duration-200"
                                aria-label="Delete this transaction"
                            >
                                <TrashIcon />
                                Delete Transaction
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default TransactionModal;