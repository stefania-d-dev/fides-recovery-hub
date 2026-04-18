import React from 'react';
import { X, Activity, Phone, Mail, FileText, AlertCircle, History, ExternalLink } from 'lucide-react';

interface DebtDetailProps {
  debt: {
    id: string;
    debtor: string;
    remainingAmount: number;
    daysPastDue: number;
    riskLevel: string;
    assignedAgent: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const DebtDetailModal: React.FC<DebtDetailProps> = ({ debt, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Overlay: Scurissimo e sobrio invece del blur eccessivo */}
      <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Header: Pulito e Istituzionale */}
        <div className="px-8 py-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
              <FileText className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Dettaglio Pratica • {debt.id}</p>
              <h2 className="text-2xl font-bold text-white tracking-tight">{debt.debtor}</h2>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 rounded-xl hover:bg-slate-800 text-slate-500 hover:text-white transition-all border border-transparent hover:border-slate-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Colonna Sinistra (4/12): Financial Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2">Esposizione Residua</p>
              <p className="text-4xl font-bold text-white mb-4">€ {debt.remainingAmount.toLocaleString()}</p>
              
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Giorni di ritardo</span>
                  <span className={`font-bold ${debt.daysPastDue > 90 ? 'text-red-400' : 'text-slate-200'}`}>{debt.daysPastDue} gg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Agente Responsabile</span>
                  <span className="font-bold text-slate-200">{debt.assignedAgent}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-tighter">Score Recupero</span>
                </div>
                <span className="text-sm font-bold text-emerald-500">84%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-tighter">Livello Rischio</span>
                </div>
                <span className={`text-sm font-bold ${debt.riskLevel === 'critical' ? 'text-red-500' : 'text-orange-400'}`}>
                  {debt.riskLevel.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* Colonna Destra (8/12): Timeline & Azioni */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 h-[280px] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-slate-200 font-bold text-sm flex items-center gap-2">
                  <History className="w-4 h-4 text-blue-500" /> Registro Storico
                </h3>
                <button className="text-[10px] font-bold text-blue-500 hover:underline flex items-center gap-1">
                  AGGIUNGI NOTA <ExternalLink className="w-3 h-3" />
                </button>
              </div>
              
              <div className="space-y-6">
                {[
                  { date: '12 Apr 2026', msg: 'PEC sollecito inviata all\'ufficio legale del debitore.', type: 'legal' },
                  { date: '08 Apr 2026', msg: 'Contatto telefonico intercorso. Promessa di pagamento per il 25/04.', type: 'call' },
                  { date: '01 Apr 2026', msg: 'Pratica assegnata per analisi istruttoria.', type: 'system' }
                ].map((log, i) => (
                  <div key={i} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:bottom-[-24px] before:bg-slate-800 last:before:hidden">
                    <div className="absolute left-[-3px] top-1.5 w-3 h-3 rounded-full border-2 border-[#0f172a] bg-blue-500" />
                    <p className="text-[10px] font-bold text-slate-500 mb-1">{log.date.toUpperCase()}</p>
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">{log.msg}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98]">
                <Phone className="w-4 h-4" /> Gestisci Chiamata
              </button>
              <button className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white py-4 rounded-xl font-bold text-sm border border-slate-700 transition-all active:scale-[0.98]">
                <Mail className="w-4 h-4 text-blue-400" /> Invia Documentazione
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};