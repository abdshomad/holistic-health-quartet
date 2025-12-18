
import React from 'react';
import { PatientProfile } from '../types';
import { ClipboardList, User, Briefcase, MapPin, AlertCircle } from 'lucide-react';

interface Props {
  profile: PatientProfile;
  setProfile: (profile: PatientProfile) => void;
  onSubmit: () => void;
}

const BlueprintForm: React.FC<Props> = ({ profile, setProfile, onSubmit }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: name === 'age' || name === 'commuteDistance' ? Number(value) : value });
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="bg-slate-900 p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <ClipboardList className="w-8 h-8 text-blue-400" />
          <h2 className="text-2xl font-bold">Audit Profil Pasien</h2>
        </div>
        <p className="text-slate-400">Lengkapi data berikut untuk dianalisis oleh Holistic Health Quartet.</p>
      </div>

      <div className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <User className="w-4 h-4 text-slate-400" /> Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Contoh: Tn. Budi"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <User className="w-4 h-4 text-slate-400" /> Usia (Tahun)
            </label>
            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-slate-400" /> Pekerjaan & Rutinitas
            </label>
            <input
              type="text"
              name="occupation"
              value={profile.occupation}
              onChange={handleChange}
              placeholder="Contoh: IT Professional & Mahasiswa S2"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400" /> Komuter PP (KM/Hari)
            </label>
            <input
              type="number"
              name="commuteDistance"
              value={profile.commuteDistance}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400" /> Deskripsi Rutinitas & Keluhan Baru
          </label>
          <textarea
            name="routine"
            rows={3}
            value={profile.routine}
            onChange={handleChange}
            placeholder="Contoh: Bangun jam 3 pagi untuk tugas, duduk 8 jam kerja, mata kabur & cepat lelah..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Riwayat Medis & Diagnosa Saat Ini</label>
          <textarea
            name="medicalHistory"
            rows={2}
            value={profile.medicalHistory}
            onChange={handleChange}
            placeholder="Contoh: Hipertensi, Diabetes Melitus Tipe 2, Low Back Pain kronis..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
          />
        </div>

        <button
          onClick={onSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transform hover:-translate-y-0.5 transition-all"
        >
          Konsultasikan dengan Dewan Pakar
        </button>
      </div>
    </div>
  );
};

export default BlueprintForm;
