import React from 'react';
import { BarChart3, TrendingUp, PieChart, Download, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { RecoveryChart } from '../components/ui/RecoveryChart';

export const ReportsSection: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* Header Editoriale con Action Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-800/50 pb-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] uppercase tracking-[0.4em]">
            <BarChart3 className="w-3 h-3" />
            <span>Intelligence & Analytics</span>
          </div>
          <h1 className="text-5xl font-bold text-white tracking-tighter">Performance</h1>
          <p className="text-slate-500 max-w-lg text-base leading-relaxed font-medium">
            Analisi dettagliata dei flussi di recupero, proiezione dei flussi di cassa e performance degli agenti su base trimestrale.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-slate-300 hover:bg-slate-800 hover:text-white transition-all">
            <Calendar className="w-4 h-4 text-blue-500" />
            Ultimi 12 mesi
          </button>
          <button className="flex items-center gap-3 px-6 py-3 bg-blue-600 rounded-xl text-xs font-bold text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
            <Download className="w-4 h-4" />
            Esporta PDF
          </button>
        </div>
      </div>

      {/* Main Analysis Grid */}
      <div className="grid grid-cols-12 gap-8">
        
        {/* Grande Grafico Principale - Occupa 8/12 */}
        <div className="col-span-12 lg:col-span-8 bg-[#0f172a] border border-slate-800 rounded-[2.5rem] p-10 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 tracking-tight">Evoluzione del Recupero</h3>
              <p className="text-xs text-slate-500 font-medium">Confronto target vs effettivo</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-emerald-400">€ 342.000</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">+12.5% vs Q1 2025</p>
            </div>
          </div>
          <div className="h-[400px]">
            <RecoveryChart />
          </div>
        </div>

        {/* Insight Secondari - Occupa 4/12 */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          
          {/* Card: Efficacia Colletta */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-[2rem] p-8 hover:bg-slate-900 transition-colors duration-500">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-500/10 rounded-2xl">
                <TrendingUp className="w-6 h-6 text-blue-500" />
              </div>
              <span className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-lg">
                <ArrowUpRight className="w-3 h-3" /> 4.2%
              </span>
            </div>
            <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Efficacia Media</h4>
            <p className="text-3xl font-bold text-white mb-4 tracking-tighter text-balance">Tasso di conversione promesse</p>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full w-[72%] rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
            </div>
            <p className="text-[11px] text-slate-500 mt-3 font-medium text-right">Target: 80.0%</p>
          </div>

          {/* Card: Ripartizione Rischio */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-[2rem] p-8 hover:bg-slate-900 transition-colors duration-500">
             <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-orange-500/10 rounded-2xl">
                <PieChart className="w-6 h-6 text-orange-500" />
              </div>
              <span className="flex items-center gap-1 text-red-400 text-xs font-bold bg-red-500/10 px-2 py-1 rounded-lg">
                <ArrowDownRight className="w-3 h-3" /> 2.1%
              </span>
            </div>
            <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Concentrazione</h4>
            <p className="text-3xl font-bold text-white mb-4 tracking-tighter text-balance">Esposizione Critica (NPL)</p>
            <div className="flex gap-1.5">
              {[40, 25, 20, 15].map((w, i) => (
                <div key={i} style={{ width: `${w}%` }} className={`h-1.5 rounded-full ${['bg-red-500', 'bg-orange-500', 'bg-amber-500', 'bg-blue-500'][i]}`} />
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">High</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">Low</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};