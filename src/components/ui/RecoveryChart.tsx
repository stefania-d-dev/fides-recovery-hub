import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { month: 'Gen', amount: 45000 },
  { month: 'Feb', amount: 52000 },
  { month: 'Mar', amount: 48000 },
  { month: 'Apr', amount: 61000 },
  { month: 'Mag', amount: 55000 },
  { month: 'Giu', amount: 67000 },
];

export const RecoveryChart: React.FC = () => {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              {/* Gradiente più sobrio e profondo */}
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          
          {/* Griglia quasi invisibile, solo orizzontale */}
          <CartesianGrid 
            strokeDasharray="0" 
            stroke="rgba(255,255,255,0.03)" 
            vertical={false} 
          />
          
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }}
            dy={15}
          />
          
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 11 }}
            tickFormatter={(value) => `€${value/1000}k`}
          />
          
          <Tooltip 
            cursor={{ stroke: '#334155', strokeWidth: 2 }}
            contentStyle={{ 
              backgroundColor: '#0f172a', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '12px',
              padding: '12px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
            }}
            itemStyle={{ 
              color: '#fff', 
              fontSize: '14px', 
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}
            labelStyle={{ color: '#64748b', marginBottom: '4px', fontSize: '10px', fontWeight: 'bold' }}
            formatter={(value: number) => [`€ ${value.toLocaleString()}`, 'Recuperato']}
          />
          
          <Area 
            type="monotone" 
            dataKey="amount" 
            stroke="#3b82f6" 
            strokeWidth={2.5}
            fillOpacity={1} 
            fill="url(#colorAmount)" 
            animationDuration={1500}
            // Aggiungiamo il cerchio sui punti di snodo per precisione
            activeDot={{ r: 6, strokeWidth: 0, fill: '#3b82f6' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};