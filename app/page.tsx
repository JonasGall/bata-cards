'use client';
import { useState } from 'react';

export default function Home() {
  const playAudio = (soundName: string) => {
    const audio = new Audio(`/audio/${soundName}.mp3`);
    audio.play();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-10">Bata Learning Cards</h1>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Sample Card */}
        <button 
          onClick={() => playAudio('apple')}
          className="p-10 bg-white border-2 border-blue-500 rounded-xl shadow-lg hover:bg-blue-50 transition"
        >
          <span className="text-6xl">🍎</span>
          <p className="mt-4 font-bold">Apple</p>
        </button>

        {/* Magdagdag ka pa dito ng cards */}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Sample Card */}
        <button 
          onClick={() => playAudio('Bible')}
          className="p-10 bg-white border-2 border-blue-500 rounded-xl shadow-lg hover:bg-blue-50 transition"
        >
          <span className="text-6xl">📖</span>
          <p className="mt-4 font-bold">Bible</p>
        </button>

        {/* Magdagdag ka pa dito ng cards */}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Sample Card */}
        <button 
          onClick={() => playAudio('caterpillar')}
          className="p-10 bg-white border-2 border-blue-500 rounded-xl shadow-lg hover:bg-blue-50 transition"
        >
          <span className="text-6xl">🐛</span>
          <p className="mt-4 font-bold">Caterpillar</p>
        </button>

        {/* Magdagdag ka pa dito ng cards */}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Sample Card */}
        <button 
          onClick={() => playAudio('orange')}
          className="p-10 bg-white border-2 border-blue-500 rounded-xl shadow-lg hover:bg-blue-50 transition"
        >
          <span className="text-6xl">🍊</span>
          <p className="mt-4 font-bold">Orange</p>
        </button>

        {/* Magdagdag ka pa dito ng cards */}
      </div>


    </main>
  );
}