
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('Dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'Dashboard':
        return <Dashboard />;
      // Add other views here
      case 'Marketplace':
        return <div className="p-8 text-white">Marketplace Content</div>;
      case 'Wallet':
        return <div className="p-8 text-white">Wallet Content</div>;
      case 'Funding':
        return <div className="p-8 text-white">Funding Content</div>;
      case 'Transactions':
        return <div className="p-8 text-white">Transactions Content</div>;
      default:
        return <Dashboard />;
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-900 text-gray-200 font-sans">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;