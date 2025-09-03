import React from 'react';
import { Network } from '../types';
import { NetworkIcon, SearchIcon } from '../constants';

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

interface HeaderProps {
    selectedNetwork: Network | null;
    setActiveView: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedNetwork, setActiveView }) => {
  return (
    <header className="flex-shrink-0 bg-gray-800 border-b border-gray-700">
      <div className="flex items-center justify-between p-4 h-20">
        <div className="flex items-center gap-4">
            {selectedNetwork && (
                <div className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-semibold text-white">{selectedNetwork.name}</span>
                </div>
            )}
            <div className="relative w-full max-w-md hidden sm:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search assets, products, or transactions..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="relative text-gray-400 hover:text-white transition-colors">
            <BellIcon />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-primary"></span>
            </span>
          </button>
          
          <button onClick={() => setActiveView('Profile')} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <img 
              src="https://picsum.photos/seed/user/40/40" 
              alt="User" 
              className="h-10 w-10 rounded-full object-cover border-2 border-brand-secondary"
            />
            <div className="hidden md:block text-left">
              <p className="text-white font-semibold text-sm">Alex Ryder</p>
              <p className="text-gray-400 text-xs">Tier: Quantum</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;