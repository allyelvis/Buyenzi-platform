
import React, { useEffect, useRef } from 'react';

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
  const scriptAppended = useRef(false);

  useEffect(() => {
    const createWidget = () => {
        if (document.getElementById('tradingview-widget-container') && window.TradingView) {
            new window.TradingView.widget({
                autosize: true,
                symbol: symbol,
                interval: "D",
                timezone: "Etc/UTC",
                theme: "dark",
                style: "1",
                locale: "en",
                enable_publishing: false,
                withdateranges: true,
                hide_side_toolbar: false,
                allow_symbol_change: true,
                container_id: "tradingview-widget-container",
                // Overrides for a dark theme that matches the app
                overrides: {
                    "paneProperties.background": "#1E1E1E", // gray-800
                    "paneProperties.vertGridProperties.color": "#2A2A2A", // gray-700
                    "paneProperties.horzGridProperties.color": "#2A2A2A", // gray-700
                    "symbolWatermarkProperties.transparency": 90,
                    "scalesProperties.textColor": "#9CA3AF", // gray-400
                }
            });
        }
    };

    const onLoadScript = () => {
        createWidget();
    };

    if (!scriptAppended.current) {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = onLoadScript;
        document.body.appendChild(script);
        scriptAppended.current = true;
    } else {
        // If script is already appended, just try to create the widget.
        // This handles cases like React StrictMode double-invoking effects.
        onLoadScript();
    }
    
    // Cleanup function to remove widget, but not the script, to avoid re-downloading
    return () => {
        if (containerRef.current) {
            // TradingView widget doesn't have a public 'destroy' method.
            // Clearing the container is the standard way to remove it.
            containerRef.current.innerHTML = '';
        }
    };
  }, [symbol]);

  return (
    <div className="tradingview-widget-container h-full w-full">
      <div id="tradingview-widget-container" ref={containerRef} className="h-full w-full"></div>
    </div>
  );
};

export default TradingViewChart;
