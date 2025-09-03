
import React, { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

declare global {
    interface Window {
        TradingView: any;
    }
}

interface TradingViewChartProps {
  symbol: string;
}

const TradingViewChart: React.FC<TradingViewChartProps> = ({ symbol }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (widgetRef.current) {
        widgetRef.current.remove();
        widgetRef.current = null;
      }
      widgetRef.current = new window.TradingView.widget({
        autosize: true,
        symbol: symbol,
        interval: "D",
        timezone: "Etc/UTC",
        theme: theme,
        style: "1",
        locale: "en",
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        container_id: containerRef.current!.id,
        overrides: theme === 'dark' ? {
            "paneProperties.background": "#1E1E1E",
            "paneProperties.vertGridProperties.color": "#2A2A2A",
            "paneProperties.horzGridProperties.color": "#2A2A2A",
            "symbolWatermarkProperties.transparency": 90,
            "scalesProperties.textColor": "#9CA3AF",
        } : {},
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      if (widgetRef.current) {
        widgetRef.current.remove();
        widgetRef.current = null;
      }
    };
  }, [symbol, theme]);

  return (
    <div className="tradingview-widget-container h-full w-full">
      <div id={`tradingview-widget-container-${Math.random()}`} ref={containerRef} className="h-full w-full"></div>
    </div>
  );
};

export default TradingViewChart;