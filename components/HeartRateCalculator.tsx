
import React, { useState } from 'react';
import { Heart, Info, ArrowLeft, Activity } from 'lucide-react';

interface ZoneProps {
  name: string;
  effort: string;
  description: string;
  range: string;
  minBpm: number;
  maxBpm: number;
  color: string;
  textColor: string;
  bgColor: string;
}

const ZoneCard: React.FC<ZoneProps> = ({ name, effort, description, range, minBpm, maxBpm, color, textColor, bgColor }) => (
  <div className={`flex flex-col md:flex-row items-stretch border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
    <div className={`w-full md:w-1/3 p-6 ${bgColor} flex flex-col justify-center items-center text-center gap-2`}>
      <Heart className={`w-8 h-8 ${color}`} fill="currentColor" />
      <h3 className={`font-bold text-lg ${textColor}`}>{name}</h3>
      <p className={`text-xs font-bold uppercase tracking-wider opacity-70 ${textColor}`}>{range} Effort</p>
    </div>
    <div className="flex-1 p-6 bg-white flex flex-col justify-center">
      <p className="text-slate-600 text-sm mb-3 italic">"{description}"</p>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-black text-slate-800">{minBpm} - {maxBpm}</span>
        <span className="text-slate-400 font-bold text-xs uppercase">BPM</span>
      </div>
    </div>
  </div>
);

const HeartRateCalculator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [age, setAge] = useState<number>(40);
  const maxHr = 220 - age;

  const calculateBpm = (percent: number) => Math.round((percent / 100) * maxHr);

  const zones = [
    {
      name: "Maximum Zone",
      range: "90-100%",
      effort: "Maximum",
      description: "Membantu atlet mengembangkan kecepatan (speed).",
      minBpm: calculateBpm(90),
      maxBpm: calculateBpm(100),
      color: "text-red-500",
      textColor: "text-red-900",
      bgColor: "bg-red-50"
    },
    {
      name: "Hard (Anaerobic)",
      range: "80-90%",
      effort: "High Speed",
      description: "Meningkatkan daya tahan kecepatan tinggi.",
      minBpm: calculateBpm(80),
      maxBpm: calculateBpm(90),
      color: "text-pink-500",
      textColor: "text-pink-900",
      bgColor: "bg-pink-50"
    },
    {
      name: "Moderate (Aerobic)",
      range: "70-80%",
      effort: "Fitness",
      description: "Meningkatkan tingkat kebugaran dan tenaga.",
      minBpm: calculateBpm(70),
      maxBpm: calculateBpm(80),
      color: "text-purple-500",
      textColor: "text-purple-900",
      bgColor: "bg-purple-50"
    },
    {
      name: "Light (Fat Burning)",
      range: "60-70%",
      effort: "Metabolism",
      description: "Meningkatkan metabolisme dan daya tahan aerobik.",
      minBpm: calculateBpm(60),
      maxBpm: calculateBpm(70),
      color: "text-blue-500",
      textColor: "text-blue-900",
      bgColor: "bg-blue-50"
    },
    {
      name: "Very Light (Warm up)",
      range: "50-60%",
      effort: "Recovery",
      description: "Membantu pemulihan setelah berolahraga.",
      minBpm: calculateBpm(50),
      maxBpm: calculateBpm(60),
      color: "text-green-500",
      textColor: "text-green-900",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-semibold transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Kembali ke Menu Utama
      </button>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-2">Target Jantung Anda</h2>
            <p className="text-blue-100 opacity-90 max-w-xl">
              Gunakan kalkulator ini untuk menentukan intensitas latihan yang tepat bagi kesehatan jantung dan pembakaran lemak Anda.
            </p>
          </div>
          <Activity className="absolute right-[-20px] bottom-[-20px] w-48 h-48 text-white/10 -rotate-12" />
        </div>

        <div className="p-8 space-y-8">
          {/* Input Section */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Masukkan Usia Anda</label>
              <div className="flex items-center gap-4">
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={age} 
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <span className="text-3xl font-black text-blue-600 w-16 text-center">{age}</span>
              </div>
            </div>
            <div className="bg-white px-6 py-4 rounded-xl border border-blue-100 shadow-sm text-center min-w-[200px]">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Estimasi Max HR</p>
              <p className="text-2xl font-black text-slate-800">{maxHr} <span className="text-xs text-slate-400">BPM</span></p>
              <p className="text-[9px] text-blue-500 font-bold mt-1">(220 - {age})</p>
            </div>
          </div>

          {/* Zones Grid */}
          <div className="grid grid-cols-1 gap-4">
            {zones.map((zone, idx) => (
              <ZoneCard key={idx} {...zone} />
            ))}
          </div>

          {/* Footer Info */}
          <div className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-blue-800 leading-relaxed">
              <strong>Catatan Medis:</strong> Target detak jantung ini adalah panduan umum. Konsultasikan dengan dokter Anda (seperti Dr. Budi atau Dr. Rahmat) jika Anda memiliki kondisi jantung atau pernapasan tertentu sebelum memulai program latihan intensitas tinggi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartRateCalculator;
