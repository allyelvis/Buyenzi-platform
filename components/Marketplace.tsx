import React from 'react';
import Card from './Card';
import { MarketplaceIcon, SearchIcon } from '../constants';

const SkeletonCard = () => (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-4 animate-pulse">
        <div className="w-full h-40 bg-gray-700 rounded-lg"></div>
        <div className="mt-4 space-y-3">
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-3 bg-gray-700 rounded w-1/2"></div>
            <div className="flex justify-between items-center pt-2">
                <div className="h-6 bg-gray-700 rounded w-1/4"></div>
                <div className="h-8 bg-gray-700 rounded-full w-1/3"></div>
            </div>
        </div>
    </div>
);

const Marketplace: React.FC = () => {
    return (
        <div className="p-4 md:p-8 space-y-8">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Marketplace</h1>
                    <p className="text-gray-400">Discover exclusive digital and physical goods.</p>
                </div>
                <div className="relative w-full max-w-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search the marketplace..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                </div>
            </div>

            <Card>
                <div className="text-center py-20">
                    <MarketplaceIcon className="w-16 h-16 mx-auto text-brand-primary" />
                    <h2 className="mt-4 text-2xl font-bold text-white">Coming Soon!</h2>
                    <p className="mt-2 text-gray-400">Our marketplace is under construction. Get ready to explore a universe of unique items.</p>
                </div>
            </Card>

            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Sneak Peek</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
