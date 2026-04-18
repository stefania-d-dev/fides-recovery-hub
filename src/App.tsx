import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import FidesRecoveryPlatform from './FidesRecoveryPlatform';
import { DebtorsSection } from './features/DebtorsSection';
import { ReportsSection } from './features/ReportsSection';
import { AutomationSection } from './features/AutomationSection';

type NavigationTab = 'dashboard' | 'pratiche' | 'debitori' | 'report' | 'automazioni' | 'settings';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>('dashboard');
  const [isPending, setIsPending] = useState(false);

  const handleNavigation = (id: string) => {
    const tabId = id as NavigationTab;
    if (tabId === activeTab) return;

    setIsPending(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsPending(false);
    }, 350);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
      case 'pratiche':
        return <FidesRecoveryPlatform />;
      case 'debitori':
        return <DebtorsSection />;
      case 'report':
        return <ReportsSection />;
      case 'automazioni':
        return <AutomationSection />;
      default:
        return (
          <div className="h-[60vh] flex items-center justify-center border border-dashed border-slate-800 rounded-[3rem] animate-fade-up">
            <p className="text-slate-500 font-medium italic">Modulo in fase di configurazione...</p>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-[#020617] font-sans selection:bg-blue-500/30 text-slate-200">
      {/* 1. SKIP TO CONTENT: Il primo elemento per l'accessibilità */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-blue-600 focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-bold focus:shadow-2xl transition-all"
      >
        Salta al contenuto principale
      </a>

      {/* 2. SIDEBAR */}
      <Sidebar 
        activeId={activeTab} 
        onNavigate={handleNavigation} 
      />

      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Header currentSection={activeTab} />
        
        {/* 3. AREA CONTENUTO con ID per il salto */}
        <div 
          id="main-content" 
          className="flex-1 overflow-y-auto custom-scrollbar relative focus:outline-none"
          tabIndex={-1} // Permette al link di salto di spostare il focus qui
        >
          <div className={`
            p-8 lg:p-12 max-w-7xl mx-auto view-transition
            ${isPending ? 'view-hidden' : 'view-visible'}
          `}>
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;