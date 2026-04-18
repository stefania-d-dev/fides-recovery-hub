// src/components/ui/StatCard.tsx
import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  trendColor: string;
  trendLabel?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, label, value, trend, trendColor, trendLabel }) => (
  <div 
    className="bg-slate-900/40 border border-slate-800 p-6 rounded-[2rem] hover:border-blue-500/30 transition-all"
    role="group" 
    aria-labelledby={`stat-${label}`}
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-slate-800 rounded-xl text-slate-400" aria-hidden="true">
        {icon}
      </div>
      <span className={`text-[10px] font-black px-2 py-1 rounded-md bg-slate-950 border border-slate-800 ${trendColor}`}>
        <span className="sr-only">{trendLabel || 'Trend:'}</span>
        {trend}
      </span>
    </div>
    <p id={`stat-${label}`} className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{label}</p>
    <p className="text-2xl font-bold text-white tracking-tight">{value}</p>
  </div>
);