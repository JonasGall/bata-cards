'use client';
import { use, useEffect } from 'react';
import { Volume2 } from 'lucide-react'; // Magandang Speaker Icon

// Dahil wala tayong database, gagawa muna tayo ng simpleng data array
// para sa image URL. Sa susunod, pwede na itong dynamic.
const cardData = {
  apple: {
    imageUrl: 'https://images.unsplash.com/photo-1570912387496-e40e5183015b?q=80&w=600', // Sample apple image
    color: 'bg-red-500 hover:bg-red-600',
  },
  // Magdagdag pa ng iba dito
};

export default function CardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const card = cardData[id as keyof typeof cardData];

  // Function para i-play ang sound
  const playSound = () => {
    const audio = new Audio(`/audio/${id}.mp3`);
    audio.play().catch(e => console.error("Audio failure:", e));
  };

  // Magandang design, sentro, may card background
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-sm text-center">
        
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8 capitalize tracking-tight">{id}</h1>
        
        {/* Larawan ng Apple (o kung ano mang ID) */}
        <div className="flex justify-center mb-10">
          {card?.imageUrl ? (
            <img 
              src={card.imageUrl} 
              alt={id} 
              className="w-48 h-48 object-cover rounded-3xl border-4 border-gray-100 shadow-md"
            />
          ) : (
            // Placeholder kung wala pang image
            <div className="w-48 h-48 bg-gray-200 flex items-center justify-center rounded-3xl">
              <p className="text-gray-400">Walang Picture</p>
            </div>
          )}
        </div>

        {/* Professional Play Button */}
        <button 
          onClick={playSound}
          className={`flex items-center justify-center gap-3 w-full text-white font-bold py-5 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg ${card?.color || 'bg-blue-500 hover:bg-blue-600'}`}
        >
          <Volume2 className="w-8 h-8" />
          <span className="text-2xl">Play Sound</span>
        </button>
        
        <p className="text-sm text-gray-400 mt-6">Created by Jonas - Bata Cards</p>
      </div>
    </div>
  );
}