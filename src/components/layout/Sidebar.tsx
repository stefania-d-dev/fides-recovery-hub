import React from 'react';
import { Shield, LayoutDashboard, FileText, Users2, Settings, BarChart3, LogOut, ChevronRight, Zap } from 'lucide-react';

interface SidebarProps {
  activeId: string;
  onNavigate: (id: string) => void;
}

const navItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'pratiche', icon: FileText, label: 'Pratiche' },
  { id: 'debitori', icon: Users2, label: 'Debitori' },
  { id: 'automazioni', icon: Zap, label: 'Automazioni' }, // Nuova voce
  { id: 'report', icon: BarChart3, label: 'Analisi & Report' },
  { id: 'settings', icon: Settings, label: 'Impostazioni' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeId, onNavigate }) => {
  return (
    <aside className="w-72 bg-[#0a0f1d] border-r border-slate-800 flex flex-col h-screen sticky top-0 z-20">
      <div className="h-24 px-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.2)]">
          <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-xl tracking-tight leading-none">FIDES</span>
          <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mt-1">Recovery</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Menu Principale</p>
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                isActive ? 'bg-blue-600/10 text-blue-400' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                <span className="font-semibold text-sm tracking-wide">{item.label}</span>
              </div>
              {isActive && <ChevronRight className="w-4 h-4" />}
            </button>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 font-bold text-blue-400 text-xs">SD</div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-sm font-bold text-slate-200 truncate">Stefania Deliso</p>
              <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">Account Manager</p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-800 hover:bg-red-500/10 hover:text-red-400 rounded-xl text-slate-400 text-xs font-bold transition-all border border-slate-700 hover:border-red-500/30">
            <LogOut className="w-3.5 h-3.5" /> Disconnetti
          </button>
        </div>
      </div>
    </aside>
  );
};