'use client'; 
import { QRCodeCanvas } from 'qrcode.react';
import { use } from 'react';

export default function CardPage({ params }: { params: Promise<{ id: string }> }) {
  // Ginagamit ang 'use' para i-unwrap ang promise ng params
  const { id } = use(params);
  
  const cardUrl = `https://bata-cards-py4a.vercel.app/card/${id}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Card ID: {id}</h1>
      
      {/* Dito lalabas ang QR Code */}
      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <QRCodeCanvas value={cardUrl} size={256} />
      </div>
      
      <p style={{ marginTop: '20px' }}>I-scan ang QR code para buksan ang card na ito!</p>
    </div>
  );
}