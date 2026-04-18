// src/components/layout/Header.tsx
import React from 'react';
import { Bell } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
}

export const Header: React.FC<HeaderProps> = ({ currentSection }) => (
  <header className="h-20 border-b border-slate-800/50 flex items-center px-12 justify-between bg-[#020617]/80 backdrop-blur-md sticky top-0 z-10">
    <nav className="flex items-center gap-3 text-sm font-medium" aria-label="Breadcrumb">
      <span className="text-slate-500">Fides</span>
      <span className="text-slate-700" aria-hidden="true">/</span>
      <h1 
        className="text-slate-200 font-bold tracking-tight capitalize" 
        aria-live="polite"
      >
        {currentSection}
      </h1>
    </nav>

    <div className="flex items-center gap-6">
      <button 
        className="relative p-2 text-slate-400 hover:text-white transition-colors"
        aria-label="3 nuove notifiche"
      >
        <Bell className="w-5 h-5" />
        <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#020617]" />
      </button>
      
      {/* User Profile - A11Y Optimized */}
      <div className="flex items-center gap-3 pl-6 border-l border-slate-800">
        <div className="text-right hidden sm:block">
          <p className="text-xs font-bold text-white leading-none">Stefania Deliso</p>
          <p className="text-[10px] text-slate-500 font-medium uppercase mt-1">Account Manager</p>
        </div>
        <div className="w-10 h-10 bg-blue-600/10 border border-blue-500/20 rounded-full flex items-center justify-center text-blue-500 font-bold text-xs" aria-hidden="true">
          SD
        </div>
      </div>
    </div>
  </header>
);