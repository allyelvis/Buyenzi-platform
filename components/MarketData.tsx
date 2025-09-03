
import React, { useState, useEffect } from 'react';
import Card from './Card';
import { MOCK_MARKET_DATA } from '../constants';
import { MarketData as MarketDataType } from '../types';
import SparklineChart from './SparklineChart';

const MarketData: React.FC = () => {
    
    const [lastUpdated, setLastUpdated] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setLastUpdated(new Date());
        }, 5000); // Simulate update every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const formatPrice = (price: number) => {
        if (price >= 1) {
            return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        return price.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 });
    }

    const MarketRow: React.FC<{ asset: MarketDataType }> = ({ asset }) => {
        const isPositive = asset.change24h >= 0;
        const color = isPositive ? '#00F5A0' : '#F87171'; // brand-primary for green, red-400 for red

        return (
            <div className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0">
                <div className="flex items-center gap-3">
                    <asset.icon className="w-8 h-8" />
                    <div>
                        <p className="font-bold text-white">{asset.symbol}</p>
                        <p className="text-xs text-gray-400">{asset.name}</p>
                    </div>
                </div>
                <div className="hidden sm:block">
                     <SparklineChart data={asset.sparkline} color={color} />
                </div>
                <div className="text-right">
                    <p className="font-semibold text-white">${formatPrice(asset.price)}</p>
                    <p className={`text-sm font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {isPositive ? '+' : ''}{asset.change24h.toFixed(2)}%
                    </p>
                </div>
            </div>
        );
    };

    return (
        <Card title="Live Market">
             <div className="flow-root max-h-[450px] overflow-y-auto pr-2 -mr-2">
                <div className="-my-3 divide-y divide-gray-700">
                    {MOCK_MARKET_DATA.map(asset => (
                        <MarketRow key={asset.id} asset={asset} />
                    ))}
                </div>
            </div>
            <p className="text-xs text-gray-500 text-center mt-4">
                Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
        </Card>
    );
};

export default MarketData;
