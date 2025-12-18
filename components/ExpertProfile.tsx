
import React from 'react';
import { EXPERTS, EXPERT_ICONS } from '../constants';

const ExpertProfile: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
      {EXPERTS.map((expert) => (
        <div key={expert.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 w-full" />
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-slate-50 rounded-lg">
                {EXPERT_ICONS[expert.id as keyof typeof EXPERT_ICONS]}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 leading-tight text-sm">{expert.name}</h3>
                <p className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider">{expert.experience} Pengalaman</p>
              </div>
            </div>
            
            <p className="text-xs font-bold text-slate-400 uppercase mb-3">{expert.title}</p>
            
            <div className="space-y-4 flex-1">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Fokus</span>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{expert.focus}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Perspektif</span>
                <p className="text-sm italic text-slate-500 leading-relaxed">"{expert.perspective}"</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpertProfile;
