export const LoadingRespiro = () => (
  <div className="space-y-12 animate-pulse p-4">
    <div className="space-y-4">
      <div className="h-4 w-32 bg-slate-800 rounded-full" />
      <div className="h-12 w-64 bg-slate-800 rounded-2xl" />
      <div className="h-20 w-full bg-slate-900/50 rounded-[2.5rem] border border-slate-800" />
    </div>
    <div className="grid grid-cols-3 gap-6">
      {[1, 2, 3].map(i => (
        <div key={i} className="h-48 bg-slate-900/40 rounded-[2rem] border border-slate-800" />
      ))}
    </div>
  </div>
);