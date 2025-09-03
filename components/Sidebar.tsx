import React from 'react';
import { NavItem as NavItemType } from '../types';
import { NAV_ITEMS, Logo, SettingsIcon } from '../constants';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const NavItem: React.FC<{
  item: NavItemType;
  isActive: boolean;
  onClick: () => void;
}> = ({ item, isActive, onClick }) => {
  const activeClasses = 'bg-brand-primary/10 text-brand-primary border-r-4 border-brand-primary';
  const inactiveClasses = 'text-gray-400 hover:bg-gray-700 hover:text-white';
  
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center w-full px-6 py-4 space-x-4 transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses}`}
      >
        <item.icon className="w-6 h-6" />
        <span className="font-semibold text-lg">{item.name}</span>
      </button>
    </li>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const isSettingsActive = activeView === 'Settings';
  const settingsClasses = isSettingsActive 
    ? 'bg-brand-primary/10 text-brand-primary' 
    : 'text-gray-400 hover:bg-gray-700 hover:text-white';

  return (
    <nav className="w-72 flex-shrink-0 bg-gray-800 flex flex-col justify-between border-r border-gray-700">
      <div>
        <div className="flex items-center justify-center h-20 border-b border-gray-700">
          <Logo className="h-10 w-auto" />
        </div>
        <ul className="mt-6">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.name}
              item={item}
              isActive={activeView === item.name}
              onClick={() => setActiveView(item.name)}
            />
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-700">
         <ul>
           <li>
              <button
                onClick={() => setActiveView('Settings')}
                className={`flex items-center w-full px-6 py-4 space-x-4 transition-colors duration-200 ${settingsClasses}`}
              >
                <SettingsIcon className="w-6 h-6" />
                <span className="font-semibold text-lg">Settings</span>
              </button>
            </li>
         </ul>
      </div>
    </nav>
  );
};

export default Sidebar;