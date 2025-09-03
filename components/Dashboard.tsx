import React from 'react';
import Card from './Card';
import Chart from './Chart';
import { MOCK_CHART_DATA, MOCK_PRODUCTS } from '../constants';
import { Transaction, Product } from '../types';
import TransactionRow from './TransactionRow';

interface DashboardProps {
    transactions: Transaction[];
    onSelectTransaction: (transaction: Transaction) => void;
}

const ArrowUpRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);

const ProductCard: React.FC<{product: Product}> = ({ product }) => (
    <div className="bg-gray-700 rounded-lg overflow-hidden group">
        <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="p-4">
            <h4 className="text-md font-bold text-white truncate">{product.name}</h4>
            <p className="text-sm text-gray-400">{product.category}</p>
            <div className="flex items-center justify-between mt-3">
                <p className="text-lg font-semibold text-brand-primary">${product.price.toLocaleString()}</p>
                <button className="text-xs bg-brand-primary/20 text-brand-primary font-bold py-1 px-3 rounded-full hover:bg-brand-primary hover:text-gray-900 transition-colors">
                    View
                </button>
            </div>
        </div>
    </div>
);


const Dashboard: React.FC<DashboardProps> = ({ transactions, onSelectTransaction }) => {
    const recentTransactions = transactions.slice(0, 4);

    return (
        <div className="p-4 md:p-8 space-y-8">
            {/* Top Row: Portfolio and Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card title="Portfolio Overview" className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <p className="text-gray-400 text-sm">Total Balance</p>
                            <p className="text-4xl font-bold text-white">$1,284,592.73</p>
                        </div>
                        <div className="flex items-center gap-2 text-green-400 font-semibold bg-green-500/10 px-3 py-1 rounded-full">
                            <ArrowUpRightIcon/>
                            <span>12.5%</span>
                        </div>
                    </div>
                    <Chart data={MOCK_CHART_DATA} />
                </Card>

                <Card title="Quick Actions">
                    <div className="space-y-4">
                         <button className="w-full text-left p-4 rounded-lg bg-gray-700 hover:bg-brand-primary hover:text-gray-900 transition-all duration-200 group">
                            <p className="font-bold text-white group-hover:text-gray-900">Buy Cryptocurrency</p>
                            <p className="text-sm text-gray-400 group-hover:text-gray-700">Instantly purchase BTC, ETH, and more.</p>
                        </button>
                         <button className="w-full text-left p-4 rounded-lg bg-gray-700 hover:bg-brand-primary hover:text-gray-900 transition-all duration-200 group">
                            <p className="font-bold text-white group-hover:text-gray-900">Shop Marketplace</p>
                            <p className="text-sm text-gray-400 group-hover:text-gray-700">Explore exclusive digital and physical goods.</p>
                        </button>
                         <button className="w-full text-left p-4 rounded-lg bg-gray-700 hover:bg-brand-primary hover:text-gray-900 transition-all duration-200 group">
                            <p className="font-bold text-white group-hover:text-gray-900">Stake Assets</p>
                            <p className="text-sm text-gray-400 group-hover:text-gray-700">Earn rewards on your crypto holdings.</p>
                        </button>
                    </div>
                </Card>
            </div>

            {/* Bottom Row: E-commerce and Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <Card title="Featured Products" className="lg:col-span-3">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {MOCK_PRODUCTS.map(product => <ProductCard key={product.id} product={product} />)}
                    </div>
                </Card>
                <Card title="Recent Transactions" className="lg:col-span-2">
                    <div className="flow-root">
                        <div className="-my-3 divide-y divide-gray-700">
                             {recentTransactions.map(tx => <TransactionRow key={tx.id} transaction={tx} onClick={() => onSelectTransaction(tx)} />)}
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;