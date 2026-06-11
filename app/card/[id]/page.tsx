'use client'; 
import { QRCodeCanvas } from 'qrcode.react';
import { use } from 'react';

export default function CardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const cardUrl = `https://bata-cards.vercel.app/card/${id}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textTransform: 'capitalize' }}>Card: {id}</h1>

      <div style={{ marginTop: '20px', padding: '20px', border: '2px solid #333', borderRadius: '10px' }}>
        <QRCodeCanvas value={cardUrl} size={256} />
      </div>

      <p style={{ marginTop: '20px', color: '#555' }}>I-scan ang QR code para buksan ang card na ito!</p>
    </div>
  );
}