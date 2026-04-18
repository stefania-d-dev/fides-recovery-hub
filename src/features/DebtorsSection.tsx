import React, { useState } from 'react';
import { Users2, Search, Filter, MoreHorizontal, ArrowUpRight, Building2, MapPin } from 'lucide-react';

interface Debtor {
  id: string;
  name: string;
  location: string;
  totalDebt: number;
  activePractices: number;
  status: 'active' | 'legal_process' | 'settled';
}

const MOCK_DEBTORS: Debtor[] = [
  { id: 'D-1024', name: 'Althea Consulting S.r.l.', location: 'Milano, IT', totalDebt: 124500, activePractices: 3, status: 'active' },
  { id: 'D-1025', name: 'Global Logistics SpA', location: 'Catania, IT', totalDebt: 89000, activePractices: 1, status: 'legal_process' },
  { id: 'D-1026', name: 'Nuova Meccanica s.n.c.', location: 'Torino, IT', totalDebt: 15600, activePractices: 2, status: 'settled' },
];

export const DebtorsSection: React.FC = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      
      {/* Header Editoriale */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em]">
            <Users2 className="w-3 h-3" />
            <span>Management Anagrafiche</span>
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Debitori</h1>
          <p className="text-slate-500 max-w-md text-sm leading-relaxed">
            Gestione centralizzata delle entità debitrici. Analisi del rischio aggregato e storico posizioni debitorie.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text"
              placeholder="Cerca entità..."
              className="bg-slate-900 border border-slate-800 rounded-xl py-3 pl-11 pr-6 text-sm w-64 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-all text-slate-400 hover:text-white">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid di Composizione - Qui facciamo respirare i prodotti */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_DEBTORS.map((debtor) => (
          <div key={debtor.id} className="group relative bg-[#0f172a] border border-slate-800 rounded-[2rem] p-8 hover:border-blue-500/40 transition-all duration-500 shadow-sm hover:shadow-blue-900/10">
            
            {/* Azioni Rapide */}
            <div className="absolute top-8 right-8 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
              <button className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                <MoreHorizontal className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Identità */}
            <div className="mb-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500 border border-slate-700">
                <Building2 className="w-10 h-10 text-slate-500 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{debtor.name}</h3>
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium uppercase tracking-widest">
                <MapPin className="w-3 h-3" />
                {debtor.location}
              </div>
            </div>

            {/* Metrics Interna */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-800/50">
              <div className="space-y-1">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Esposizione</p>
                <p className="text-lg font-bold text-white tracking-tight">€ {debtor.totalDebt.toLocaleString()}</p>
              </div>
              <div className="space-y-1 text-right">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Pratiche Attive</p>
                <p className="text-lg font-bold text-white tracking-tight">{debtor.activePractices}</p>
              </div>
            </div>

            {/* Status Badge Custom */}
            <div className="mt-6">
              <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border
                ${debtor.status === 'active' ? 'text-blue-400 border-blue-500/20 bg-blue-500/5' : 
                  debtor.status === 'legal_process' ? 'text-orange-400 border-orange-500/20 bg-orange-500/5' : 
                  'text-emerald-400 border-emerald-500/20 bg-emerald-500/5'}`}>
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${debtor.status === 'active' ? 'bg-blue-500' : debtor.status === 'legal_process' ? 'bg-orange-500' : 'bg-emerald-500'}`} />
                {debtor.status.replace('_', ' ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};