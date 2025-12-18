
import React, { useState } from 'react';
import { AppState, PatientProfile } from './types';
import { generateBlueprint } from './services/geminiService';
import ExpertProfile from './components/ExpertProfile';
import BlueprintForm from './components/BlueprintForm';
import BlueprintResult from './components/BlueprintResult';
import { HeartPulse, Loader2, Sparkles, AlertCircle } from 'lucide-react';

const INITIAL_PROFILE: PatientProfile = {
  name: 'Tn. XXXXX',
  age: 51,
  gender: 'Laki-laki',
  occupation: 'IT Professional & Mahasiswa S2',
  routine: 'Bangun pukul 03.00 pagi untuk belajar/tugas (screentime dini hari), lanjut kerja kantor (>8 jam duduk). Komuter Berkendara (PP 46 KM/hari). Lahir 04 Juni 1974.',
  complaints: 'Penglihatan kurang jernih, kabur, dan mata sangat cepat lelah akhir-akhir ini.',
  medicalHistory: 'Hipertensi, Diabetes Melitus Tipe 2, Low Back Pain (LBP) kronis.',
  commuteDistance: 46
};

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.WELCOME);
  const [profile, setProfile] = useState<PatientProfile>(INITIAL_PROFILE);
  const [blueprint, setBlueprint] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleStart = () => setState(AppState.FORM);

  const handleSubmit = async () => {
    setState(AppState.GENERATING);
    setError(null);
    try {
      const result = await generateBlueprint(profile);
      setBlueprint(result);
      setState(AppState.RESULT);
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan sistem.');
      setState(AppState.FORM);
    }
  };

  const handleReset = () => {
    setState(AppState.WELCOME);
    setBlueprint('');
    setError(null);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleReset}>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <HeartPulse className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">Holistic Health Quartet</h1>
              <p className="text-[10px] uppercase font-bold text-blue-600 tracking-widest leading-none">Dewan Kesehatan Terpadu</p>
            </div>
          </div>
          {state === AppState.RESULT && (
            <button
              onClick={handleReset}
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              Ubah Data
            </button>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-12">
        {state === AppState.WELCOME && (
          <div className="space-y-12 animate-in fade-in duration-700">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Blueprint Pemulihan & <span className="text-blue-600">Proteksi Total</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Kami adalah panel ahli yang bekerja secara integratif untuk menyambungkan titik-titik kompleksitas 
                kesehatan metabolik, biomekanik, dan penglihatan Anda.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-xs">
                <Sparkles className="w-4 h-4" /> Panel Ahli Anda
              </div>
              <ExpertProfile />
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleStart}
                className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-xl shadow-blue-200 hover:scale-105 active:scale-95"
              >
                Mulai Konsultasi Gratis
              </button>
            </div>
          </div>
        )}

        {state === AppState.FORM && (
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-700">
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}
            <BlueprintForm profile={profile} setProfile={setProfile} onSubmit={handleSubmit} />
          </div>
        )}

        {state === AppState.GENERATING && (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in duration-500">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-20 animate-pulse"></div>
              <Loader2 className="w-16 h-16 text-blue-600 animate-spin relative" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Merumuskan Analisis Quadrangulasi...</h3>
              <div className="max-w-md mx-auto space-y-2">
                <p className="text-slate-500 animate-pulse">Dr. Budi sedang meninjau badai metabolik Anda...</p>
                <p className="text-slate-500 animate-pulse delay-700">Dr. Retno memetakan kondisi mikrovaskular mata...</p>
                <p className="text-slate-500 animate-pulse delay-1000">Dr. Rahmat mengevaluasi biomekanika lumbar...</p>
                <p className="text-slate-500 animate-pulse delay-1500">Ade Rai menyusun KPI & strategi penguatan otot...</p>
              </div>
            </div>
          </div>
        )}

        {state === AppState.RESULT && (
          <BlueprintResult content={blueprint} onReset={handleReset} />
        )}
      </main>

      {/* Footer Disclaimer */}
      <footer className="mt-20 border-t border-slate-100 py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm space-y-4">
          <p className="max-w-2xl mx-auto">
            Aplikasi ini adalah alat edukasi berbasis kecerdasan buatan. "The Holistic Health Quartet" adalah persona simulasi untuk memberikan perspektif terpadu.
          </p>
          <p className="font-bold text-slate-400">© 2024 Holistic Health Quartet - Dewan Kesehatan Holistik Terpadu</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
