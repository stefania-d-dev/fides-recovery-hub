import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  ChevronRight, 
  Search, 
  Banknote, 
  Target, 
  AlertTriangle, 
  Clock,
  Filter,
  ArrowUpRight
} from 'lucide-react';
import { StatCard } from './components/ui/StatCard';
import { RecoveryChart } from './components/ui/RecoveryChart';
import { DebtDetailModal } from './features/DebtDetailModal';

interface Debt {
  id: string;
  debtor: string;
  remainingAmount: number;
  daysPastDue: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  assignedAgent: string;
}

const MOCK_DEBTS: Debt[] = [
  { id: 'FID-001', debtor: 'Mediterraneo Logistics', remainingAmount: 45000, daysPastDue: 15, riskLevel: 'medium', assignedAgent: 'M. Rossi' },
  { id: 'FID-002', debtor: 'Sicilian Trade Export', remainingAmount: 62800, daysPastDue: 85, riskLevel: 'high', assignedAgent: 'A. Bianchi' },
  { id: 'FID-003', debtor: 'Innovazione Digitale', remainingAmount: 32000, daysPastDue: 7, riskLevel: 'low', assignedAgent: 'G. Verde' },
  { id: 'FID-004', debtor: 'Catania Group', remainingAmount: 95000, daysPastDue: 180, riskLevel: 'critical', assignedAgent: 'M. Neri' },
];

const FidesRecoveryPlatform: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDebt, setSelectedDebt] = useState<Debt | null>(null);

  // Logica di filtraggio accessibile
  const filteredDebts = useMemo(() => {
    return MOCK_DEBTS.filter(debt => 
      debt.debtor.toLowerCase().includes(searchTerm.toLowerCase()) || 
      debt.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="space-y-8 animate-fade-up" role="main">
      
      {/* Griglia Statistiche - Accessibilità: Ruolo group e label semantiche */}
      <section 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" 
        aria-label="Indicatori chiave di prestazione"
      >
        <StatCard 
          icon={<Banknote className="w-5 h-5" />} 
          label="Portfolio Totale" 
          value="€ 234.800" 
          trend="+2.4%" 
          trendColor="text-emerald-500"
          trendLabel="In aumento del"
        />
        <StatCard 
          icon={<Target className="w-5 h-5" />} 
          label="Tasso Recupero" 
          value="17.4%" 
          trend="+0.8%" 
          trendColor="text-blue-500"
          trendLabel="Migliorato del"
        />
        <StatCard 
          icon={<AlertTriangle className="w-5 h-5" />} 
          label="Pratiche Critiche" 
          value="12" 
          trend="Stabili" 
          trendColor="text-slate-400"
        />
        <StatCard 
          icon={<Clock className="w-5 h-5" />} 
          label="Media DSO" 
          value="42 gg" 
          trend="-2gg" 
          trendColor="text-emerald-500"
          trendLabel="Diminuito di"
        />
      </section>

      {/* Grafico Principale - Accessibilità: Titoli chiari e focus visivo */}
      <section 
        className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-sm"
        aria-labelledby="chart-title"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 id="chart-title" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            Andamento Recuperi Mensili
          </h2>
          <button 
            className="flex items-center gap-2 text-xs font-bold text-blue-500 hover:text-blue-400 uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-4 focus:ring-offset-[#020617] rounded"
            aria-label="Visualizza report dettagliato dei recuperi"
          >
            <ArrowUpRight className="w-3 h-3" />
            Report Dettagliato
          </button>
        </div>
        <div className="h-64 md:h-80">
          <RecoveryChart />
        </div>
      </section>

      {/* Barra di Ricerca e Filtri */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96 group">
          <label htmlFor="search-debts" className="sr-only">Cerca debitore per nome o ID pratica</label>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" aria-hidden="true" />
          <input 
            id="search-debts"
            type="text" 
            placeholder="Filtra per azienda o ID..." 
            className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-slate-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button 
          className="flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:border-slate-700 transition-all"
          aria-label="Apri filtri avanzati"
        >
          <Filter className="w-4 h-4" />
          Filtri Avanzati
        </button>
      </div>

      {/* Tabella Pratiche - Accessibilità: Ruolo table, focus rings, indicatori di forma */}
      <section className="bg-slate-900/30 border border-slate-800 rounded-[2rem] overflow-hidden shadow-xl" aria-label="Elenco pratiche di recupero">
        <div 
          className="grid grid-cols-12 px-8 py-4 border-b border-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-900/50"
          role="rowheader"
        >
          <div className="col-span-5">Debitore</div>
          <div className="col-span-3 text-right">Esposizione Residua</div>
          <div className="col-span-2 text-center">Rischio</div>
          <div className="col-span-2 invisible">Azioni</div>
        </div>
        
        <div className="divide-y divide-slate-800/50" role="list">
          {filteredDebts.length > 0 ? (
            filteredDebts.map((debt) => (
              <div 
                key={debt.id} 
                onClick={() => setSelectedDebt(debt)} 
                onKeyDown={(e) => e.key === 'Enter' && setSelectedDebt(debt)}
                tabIndex={0}
                role="button"
                aria-label={`Dettagli per ${debt.debtor}, residuo ${debt.remainingAmount} euro, rischio ${debt.riskLevel}`}
                className="grid grid-cols-12 px-8 py-6 items-center hover:bg-slate-800/40 focus:bg-blue-500/5 focus:outline-none transition-all cursor-pointer group"
              >
                <div className="col-span-5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 transition-colors group-hover:border-blue-500/30" aria-hidden="true">
                    <Building2 className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{debt.debtor}</h3>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter italic">Pratica #{debt.id}</p>
                  </div>
                </div>
                
                <div className="col-span-3 text-right text-sm font-mono font-bold text-slate-200">
                  € {debt.remainingAmount.toLocaleString()}
                </div>

                <div className="col-span-2 flex justify-center">
                  {/* Badge inclusivo: Colore + Forma per daltonismo */}
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-md border text-[9px] font-black uppercase tracking-tighter
                    ${debt.riskLevel === 'critical' ? 'text-red-400 border-red-500/20 bg-red-500/5' : 
                      debt.riskLevel === 'high' ? 'text-orange-400 border-orange-400/20 bg-orange-400/5' : 
                      'text-emerald-400 border-emerald-400/20 bg-emerald-400/5'}`}>
                    
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      debt.riskLevel === 'critical' ? 'bg-red-500 animate-pulse' : 
                      debt.riskLevel === 'high' ? 'rotate-45 bg-orange-500' : 'bg-emerald-500'
                    }`} aria-hidden="true" />
                    
                    <span>{debt.riskLevel}</span>
                  </div>
                </div>

                <div className="col-span-2 flex justify-end">
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-slate-500 italic text-sm" role="status">
              Nessuna pratica trovata per i criteri inseriti.
            </div>
          )}
        </div>
      </section>

      {/* Modal - Accessibilità: Gestione focus inclusa nel componente */}
      {selectedDebt && (
        <DebtDetailModal 
          debt={selectedDebt} 
          isOpen={!!selectedDebt} 
          onClose={() => setSelectedDebt(null)} 
        />
      )}
    </div>
  );
};

export default FidesRecoveryPlatform;