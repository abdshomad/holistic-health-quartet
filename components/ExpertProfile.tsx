
import React from 'react';
import { EXPERTS, EXPERT_ICONS } from '../constants';

const ExpertProfile: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
      {EXPERTS.map((expert) => (
        <div key={expert.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
          <img src={expert.image} alt={expert.name} className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              {EXPERT_ICONS[expert.id as keyof typeof EXPERT_ICONS]}
              <h3 className="font-bold text-slate-800 leading-tight">{expert.name}</h3>
            </div>
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">{expert.title}</p>
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Fokus</span>
                <p className="text-sm text-slate-600 leading-relaxed">{expert.focus}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Perspektif</span>
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
