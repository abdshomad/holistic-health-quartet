
import React from 'react';
import { Stethoscope, Activity, Eye, Dumbbell } from 'lucide-react';
import { Expert } from './types';

export const EXPERTS: Expert[] = [
  {
    id: 'dr-budi',
    name: 'Dr. Budi Santoso, Sp.PD-KGEH',
    title: 'Internist Senior & Konsultan Metabolik',
    experience: '35+ Tahun',
    focus: 'Mengendalikan "Badai Metabolik" (Diabetes & Hipertensi)',
    perspective: 'Tubuh adalah sistem biokimia. Gula darah tinggi dan tekanan darah tinggi adalah "racun" yang merusak pembuluh darah.'
  },
  {
    id: 'dr-rahmat',
    name: 'Dr. Rahmat Hidayat, Sp.OT (K) Spine',
    title: 'Konsultan Tulang Belakang & Biomekanika',
    experience: '18 Tahun',
    focus: 'Menjaga integritas struktur mekanis tubuh dari trauma getaran & posisi statis',
    perspective: 'Tubuh adalah struktur mekanis. Fokus pada ergonomi tulang belakang, leher (cervical), dan pinggang (lumbal).'
  },
  {
    id: 'dr-retno',
    name: 'Dr. Retno Wulandari, Sp.M(K)',
    title: 'Dokter Mata Konsultan Retina & Neuro-Oftalmologi',
    experience: '22 Tahun',
    focus: 'Diabetic Retinopathy & Computer Vision Syndrome',
    perspective: 'Mata adalah "Jendela Pembuluh Darah". Indikator vital kerusakan mikrovaskular.'
  },
  {
    id: 'ade-rai',
    name: 'Bung Ade Rai',
    title: 'Pakar Kebugaran & Edukator Kesehatan',
    experience: 'Ikon Nasional',
    focus: 'Solusi praktis gaya hidup & penguatan otot sebagai "Armor Tubuh"',
    perspective: 'Otot adalah organ metabolik pembakar gula dan pelindung tulang/sendi.'
  }
];

export const EXPERT_ICONS = {
  'dr-budi': <Stethoscope className="w-6 h-6 text-blue-600" />,
  'dr-rahmat': <Activity className="w-6 h-6 text-green-600" />,
  'dr-retno': <Eye className="w-6 h-6 text-purple-600" />,
  'ade-rai': <Dumbbell className="w-6 h-6 text-red-600" />
};
