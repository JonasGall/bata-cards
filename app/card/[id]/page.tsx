'use client';
import { use } from 'react';
import { Volume2 } from 'lucide-react';

export default function CardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const playSound = () => {
    const audio = new Audio(`/audio/${id}.mp3`);
    audio.play();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl text-center w-full max-w-sm">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8 capitalize">{id}</h1>
        
        {/* Dito natin tinatawag ang image mula sa public/images folder */}
        <div className="flex justify-center mb-10">
          <img 
            src={`/images/${id}.png`} // Ito ay maghahanap ng apple.png kung 'apple' ang id
            alt={id} 
            className="w-48 h-48 object-cover rounded-3xl shadow-md border-4 border-gray-100"
          />
        </div>

        <button 
          onClick={playSound}
          className="flex items-center justify-center gap-3 w-full bg-blue-500 text-white font-bold py-5 px-10 rounded-full hover:bg-blue-600 transition-all"
        >
          <Volume2 className="w-8 h-8" />
          <span className="text-2xl">Play Sound</span>
        </button>
      </div>
    </div>
  );
}