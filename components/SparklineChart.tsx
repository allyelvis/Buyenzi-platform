
import React from 'react';
import { ResponsiveContainer, LineChart, Line, Tooltip } from 'recharts';

interface SparklineChartProps {
  data: number[];
  color: string;
}

const SparklineChart: React.FC<SparklineChartProps> = ({ data, color }) => {
  const chartData = data.map((value, index) => ({ name: index, value }));

  return (
    <div style={{ width: '100px', height: '40px' }}>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <Tooltip
            contentStyle={{ display: 'none' }}
            wrapperStyle={{ display: 'none' }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SparklineChart;
