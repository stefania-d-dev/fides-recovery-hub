import React from 'react';
import { Play, Settings2, Bell, Mail, ShieldAlert, Plus, Zap } from 'lucide-react';

const WORKFLOWS = [
  { id: 1, name: "Sollecito Early-Stage", trigger: "Scaduto > 15gg", action: "Invio Email Reminder", status: "active" },
  { id: 2, name: "Protocollo NPL Critico", trigger: "Rischio == Critical", action: "Assegnazione Legale", status: "active" },
  { id: 3, name: "Reporting Mensile CFO", trigger: "Ogni 30gg", action: "Export PDF & Email", status: "paused" },
];

export const AutomationSection: React.FC = () => {
  return (
    <div className="space-y-10 animate-in">
      {/* Header Strategico */}
      <div className="flex justify-between items-end border-b border-slate-800/50 pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] uppercase tracking-[0.4em]">
            <Zap className="w-3 h-3" />
            <span>Smart Engine</span>
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Automazioni</h1>
          <p className="text-slate-500 text-sm max-w-md">Configura i trigger intelligenti per ottimizzare il recupero senza intervento manuale.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold text-xs transition-all shadow-lg shadow-blue-900/20">
          <Plus className="w-4 h-4" /> Nuovo Workflow
        </button>
      </div>

      {/* Workflow Cards */}
      <div className="grid grid-cols-1 gap-4">
        {WORKFLOWS.map((wf) => (
          <div key={wf.id} className="bg-slate-900/40 border border-slate-800 p-6 rounded-[1.5rem] flex items-center justify-between group hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${wf.status === 'active' ? 'bg-blue-500/10 border-blue-500/20 text-blue-500' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                {wf.id === 1 ? <Mail className="w-5 h-5" /> : wf.id === 2 ? <ShieldAlert className="w-5 h-5" /> : <Bell className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-slate-200 font-bold text-sm">{wf.name}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter">Trigger: {wf.trigger}</span>
                  <span className="w-1 h-1 bg-slate-700 rounded-full" />
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-tighter">Action: {wf.action}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg">
                <div className={`w-1.5 h-1.5 rounded-full ${wf.status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-600'}`} />
                <span className="text-[10px] font-black text-slate-400 uppercase">{wf.status}</span>
              </div>
              <button className="p-2 text-slate-500 hover:text-white transition-colors">
                <Settings2 className="w-4 h-4" />
              </button>
              <button className="p-2 text-slate-500 hover:text-blue-500 transition-colors">
                <Play className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State / Suggerimento IA */}
      <div className="bg-gradient-to-br from-blue-600/5 to-transparent border border-blue-500/10 rounded-[2rem] p-8">
        <div className="flex items-start gap-4">
          <Zap className="w-6 h-6 text-blue-500 mt-1" />
          <div>
            <h4 className="text-blue-400 font-bold text-sm mb-1">Suggerimento Smart Engine</h4>
            <p className="text-slate-400 text-xs leading-relaxed max-w-lg">
              Abbiamo rilevato che il 40% delle pratiche "Early-Stage" risponde positivamente a un sollecito SMS dopo 48 ore dalla scadenza. Vuoi attivare questo workflow?
            </p>
            <button className="mt-4 text-[10px] font-black text-white uppercase tracking-[0.1em] bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition-all">
              Attiva Suggerimento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};