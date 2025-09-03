
import React from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import { ChartData } from '../types';

interface PortfolioChartProps {
  data: ChartData[];
}

const Chart: React.FC<PortfolioChartProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #4B5563',
              borderRadius: '0.5rem' 
            }}
            labelStyle={{ color: '#F9FAFB' }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#00F5A0" 
            strokeWidth={2} 
            dot={{ r: 4, fill: '#00F5A0' }}
            activeDot={{ r: 8, stroke: '#00D9E0' }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
