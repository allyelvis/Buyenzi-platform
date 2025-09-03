
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { WalletAsset } from '../types';

interface WalletChartProps {
  data: WalletAsset[];
}

const COLORS = ['#00F5A0', '#00D9E0', '#22C55E', '#F7931A', '#627EEA'];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        const percentage = (payload[0].value / data.totalValue * 100).toFixed(2);
        return (
            <div className="bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 shadow-lg">
                <p className="font-bold text-gray-900 dark:text-white">{`${data.name}: $${data.usdValue.toLocaleString()}`}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{`Represents ${percentage}% of your portfolio`}</p>
            </div>
        );
    }
    return null;
};

const WalletChart: React.FC<WalletChartProps> = ({ data }) => {
    const totalValue = data.reduce((sum, asset) => sum + asset.usdValue, 0);
    const chartData = data.map(asset => ({...asset, totalValue}));
    
    return (
        <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="usdValue"
                        nameKey="name"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        iconType="circle"
                        formatter={(value, entry) => <span className="text-gray-600 dark:text-gray-300 ml-2">{value}</span>}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WalletChart;