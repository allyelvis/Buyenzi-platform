import React, { useState, useMemo } from 'react';
import Card from './Card';
import { Transaction } from '../types';
import TransactionRow from './TransactionRow';
import { SearchIcon } from '../constants';

interface TransactionsProps {
    transactions: Transaction[];
    onSelectTransaction: (transaction: Transaction) => void;
}

const Transactions: React.FC<TransactionsProps> = ({ transactions, onSelectTransaction }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [typeFilter, setTypeFilter] = useState('all');
    const [currencyFilter, setCurrencyFilter] = useState('all');

    const filteredTransactions = useMemo(() => {
        return transactions.filter(tx => {
            const matchesSearch = tx.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = typeFilter === 'all' || tx.type === typeFilter;
            const matchesCurrency = currencyFilter === 'all' || tx.currency === currencyFilter;
            return matchesSearch && matchesType && matchesCurrency;
        });
    }, [transactions, searchTerm, typeFilter, currencyFilter]);

    const FilterSelect: React.FC<{ value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, options: {value: string, label: string}[] }> = ({ value, onChange, options }) => (
        <select
            value={value}
            onChange={onChange}
            className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
        >
            {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
    );

    return (
        <div className="p-4 md:p-8 space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Transaction History</h1>
                <p className="text-gray-500 dark:text-gray-400">Review, filter, and search your complete transaction record.</p>
            </div>

            <Card>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-grow">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by description..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                    <div className="flex gap-4">
                         <FilterSelect 
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                            options={[
                                { value: 'all', label: 'All Types' },
                                { value: 'deposit', label: 'Deposits' },
                                { value: 'withdrawal', label: 'Withdrawals' },
                                { value: 'purchase', label: 'Purchases' },
                            ]}
                        />
                        <FilterSelect 
                            value={currencyFilter}
                            onChange={(e) => setCurrencyFilter(e.target.value)}
                            options={[
                                { value: 'all', label: 'All Currencies' },
                                { value: 'USD', label: 'USD' },
                                { value: 'BTC', label: 'BTC' },
                                { value: 'ETH', label: 'ETH' },
                            ]}
                        />
                    </div>
                </div>

                <div className="flow-root">
                    <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-700">
                        {filteredTransactions.length > 0 ? (
                            filteredTransactions.map(tx => (
                                <TransactionRow key={tx.id} transaction={tx} onClick={() => onSelectTransaction(tx)} />
                            ))
                        ) : (
                            <p className="text-center text-gray-500 dark:text-gray-400 py-12">No transactions match your filters.</p>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Transactions;