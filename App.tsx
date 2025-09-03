import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Wallet from './components/Wallet';
import Transactions from './components/Transactions';
import Funding from './components/Funding';
import NFTStudio from './components/NFTStudio';
import Explorer from './components/Explorer';
import Chatbot from './components/Chatbot';
import TV from './components/TV';
import Profile from './components/Profile';
import DAppBuilder from './components/DAppBuilder';
import Integrations from './components/Integrations';
import Marketplace from './components/Marketplace';
import TransactionModal from './components/TransactionModal';
import { DEFAULT_NETWORKS, MOCK_TRANSACTIONS } from './constants';
import { Network, Transaction } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('Dashboard');
  const [networks, setNetworks] = useState<Network[]>(DEFAULT_NETWORKS);
  const [selectedNetworkId, setSelectedNetworkId] = useState<string>(DEFAULT_NETWORKS[0].id);
  const [transactions, setTransactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const selectedNetwork = networks.find(n => n.id === selectedNetworkId) || null;

  const handleDeleteNetwork = (networkId: string) => {
    if (networkId === selectedNetworkId) {
      alert("Cannot delete the currently active network. Please switch to another network first.");
      return;
    }
    const networkToDelete = networks.find(n => n.id === networkId);
    if (networkToDelete && !networkToDelete.isCustom) {
        alert("Cannot delete a default network.");
        return;
    }
    setNetworks(prev => prev.filter(n => n.id !== networkId));
  };

  const handleDeleteTransaction = (transactionId: string) => {
    setTransactions(currentTransactions =>
        currentTransactions.filter(tx => tx.id !== transactionId)
    );
    setSelectedTransaction(null); // Close modal after deletion
  };

  const renderContent = () => {
    switch (activeView) {
      case 'Dashboard':
        return <Dashboard transactions={transactions} onSelectTransaction={setSelectedTransaction} />;
      case 'Marketplace':
        return <Marketplace />;
      case 'Wallet':
        return <Wallet />;
      case 'NFT Studio':
        return <NFTStudio />;
      case 'dApp Builder':
        return <DAppBuilder />;
      case 'TV':
        return <TV />;
      case 'Funding':
        return <Funding />;
      case 'Transactions':
        return <Transactions transactions={transactions} onSelectTransaction={setSelectedTransaction} />;
      case 'Explorer':
        return <Explorer />;
      case 'Profile':
        return <Profile />;
      case 'Integrations':
        return <Integrations />;
      case 'Settings':
        return <Settings 
                  networks={networks}
                  selectedNetworkId={selectedNetworkId}
                  onSelectNetwork={setSelectedNetworkId}
                  onAddNetwork={(newNetwork) => setNetworks(prev => [...prev, newNetwork])}
                  onDeleteNetwork={handleDeleteNetwork}
                />;
      default:
        return <Dashboard transactions={transactions} onSelectTransaction={setSelectedTransaction} />;
    }
  };
  
  return (
    <div className="flex h-screen text-gray-800 dark:text-gray-200 font-sans">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header selectedNetwork={selectedNetwork} setActiveView={setActiveView} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="fade-in" key={activeView}>
            {renderContent()}
          </div>
        </main>
      </div>
      <Chatbot />
       {selectedTransaction && (
          <TransactionModal 
              transaction={selectedTransaction} 
              onClose={() => setSelectedTransaction(null)}
              onDelete={handleDeleteTransaction}
          />
      )}
    </div>
  );
};

export default App;