'use client';
import { use } from 'react';
import { Volume2 } from 'lucide-react';

export default function CardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // Function para i-play ang specific audio
  const playSound = (lang: 'en' | 'tl') => {
    const fileName = lang === 'en' ? `/audio/${id}.mp3` : `/audio/${id}-tagalog.mp3`;
    const audio = new Audio(fileName);
    audio.play().catch(e => console.error("Audio failed:", e));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl text-center w-full max-w-sm">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8 capitalize">{id}</h1>
        
        <div className="flex justify-center mb-10">
          <img 
            src={`/images/${id}.png`} 
            alt={id} 
            className="w-48 h-48 object-cover rounded-3xl shadow-md border-4 border-gray-100"
          />
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <button 
            onClick={() => playSound('en')}
            className="flex items-center justify-center gap-3 w-full bg-blue-500 text-white font-bold py-4 px-6 rounded-full hover:bg-blue-600 transition-all"
          >
            <Volume2 className="w-6 h-6" />
            English
          </button>

          <button 
            onClick={() => playSound('tl')}
            className="flex items-center justify-center gap-3 w-full bg-green-500 text-white font-bold py-4 px-6 rounded-full hover:bg-green-600 transition-all"
          >
            <Volume2 className="w-6 h-6" />
            Tagalog
          </button>
        </div>
      </div>
    </div>
  );
}