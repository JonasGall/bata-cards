'use client';
import { QRCodeCanvas } from 'qrcode.react';
import { use } from 'react';

export default function CardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const playSound = () => {
    const audio = new Audio(`/audio/${id}.mp3`);
    audio.play().catch(e => console.error("Audio failed:", e));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
  <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center w-full max-w-sm">
    <h1 className="text-4xl font-extrabold text-blue-600 mb-6 capitalize">{id}</h1>
    
    <button 
      onClick={playSound}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg mb-8"
    >
      Play Sound 🔊
    </button>

    <div className="flex justify-center p-4 bg-white rounded-2xl border-2 border-dashed border-gray-200">
      <QRCodeCanvas value={`https://bata-cards.vercel.app/card/${id}`} size={160} />
    </div>
    
    <p className="text-sm text-gray-400 mt-4">Scan QR to share this card</p>
  </div>
</div>
  );
}