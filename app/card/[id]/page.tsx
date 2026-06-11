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
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Card: {id.toUpperCase()}</h1>
      
      {/* Button para sa Audio */}
      <button 
        onClick={playSound}
        style={{ padding: '20px', fontSize: '20px', marginBottom: '20px', cursor: 'pointer' }}
      >
        Click to Hear {id}
      </button>

      {/* QR Code */}
      <div style={{ marginTop: '20px' }}>
        <QRCodeCanvas value={`https://bata-cards.vercel.app/card/${id}`} size={128} />
      </div>
    </div>
  );
}