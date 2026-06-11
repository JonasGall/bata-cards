'use client'; 
import { QRCodeCanvas } from 'qrcode.react';
import { use } from 'react'; // Kailangan natin ito para ma-handle ang params sa client component

export default function CardPage({ params }: { params: Promise<{ id: string }> }) {
  // Gamitin natin ang React 'use' hook para ma-unwrap ang Promise ng params
  const { id } = use(params);
  
  const cardUrl = `https://bata-cards-py4a.vercel.app/card/${id}`;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Card ID: {id}</h1>
      
      {/* Dito lalabas ang QR Code */}
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <QRCodeCanvas value={cardUrl} size={256} />
      </div>
      
      <p>I-scan ang QR para sa card na ito!</p>
    </div>
  );
}