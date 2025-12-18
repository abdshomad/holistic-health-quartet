
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Download, RotateCcw, ShieldCheck, AlertTriangle } from 'lucide-react';

interface Props {
  content: string;
  onReset: () => void;
}

const BlueprintResult: React.FC<Props> = ({ content, onReset }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Accuracy Disclaimer Box */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="font-bold text-amber-900">Pernyataan Penyangkalan Akurasi & Medis</h3>
          <p className="text-sm text-amber-800 leading-relaxed">
            Laporan ini dihasilkan oleh kecerdasan buatan (AI) dan bersifat edukatif. Informasi ini <strong>bukan</strong> diagnosis medis resmi, resep obat, atau pengganti saran dokter. Akurasi data tidak dijamin sepenuhnya benar secara klinis. <strong>Jangan pernah</strong> mengabaikan saran medis profesional atau menunda mencarinya karena sesuatu yang Anda baca di sini.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-8 text-white flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-bold">Blueprint Pemulihan & Proteksi Total</h2>
            </div>
            <p className="text-blue-200/80">Hasil integrasi analisis Holistic Health Quartet</p>
          </div>
          <div className="flex gap-2 print:hidden">
            <button 
              onClick={() => window.print()}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
              title="Cetak Laporan"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-8 md:p-12 prose prose-slate max-w-none">
          <div className="text-slate-800 leading-relaxed space-y-6">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-slate-900 border-b pb-4 mb-8" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-blue-800 mt-12 mb-6 flex items-center gap-3" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-4 border-l-4 border-blue-500 pl-4" {...props} />,
                p: ({node, ...props}) => <p className="mb-6 leading-relaxed text-lg text-slate-700" {...props} />,
                ul: ({node, ...props}) => <ul className="space-y-3 list-none pl-0 my-6" {...props} />,
                li: ({node, ...props}) => (
                  <li className="flex gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100" {...props}>
                    <span className="text-blue-500 font-bold">•</span>
                    <span className="text-slate-700">{props.children}</span>
                  </li>
                ),
                table: ({node, ...props}) => (
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden" {...props} />
                  </div>
                ),
                thead: ({node, ...props}) => <thead className="bg-slate-50" {...props} />,
                th: ({node, ...props}) => <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider" {...props} />,
                td: ({node, ...props}) => <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 border-t border-slate-100" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold text-slate-900" {...props} />,
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>

        <div className="bg-slate-50 border-t border-slate-200 p-8 flex flex-col md:flex-row justify-between items-center gap-4 print:hidden">
          <p className="text-sm text-slate-500 italic max-w-md">
            Integrasi data ini disusun secara otomatis. Konsultasikan dengan dokter spesialis Anda sebelum melakukan perubahan pada protokol medis yang sedang berjalan.
          </p>
          <button
            onClick={onReset}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-all"
          >
            <RotateCcw className="w-4 h-4" /> Mulai Analisis Baru
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlueprintResult;
