const QRCode = require('qrcode');
const { jsPDF } = require('jspdf');

const items = ['apple', 'ball', 'cat', 'dog', 'elephant']; // Dito ilalagay ang listahan ng cards
const baseUrl = 'https://iyong-website.com/card/';

async function generatePDF() {
  const doc = new jsPDF();
  
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const url = `${baseUrl}${item}`;
    
    // Generate QR Code as DataURL
    const qrDataUrl = await QRCode.toDataURL(url);
    
    // Ilagay sa PDF (Positioning: x, y, width, height)
    doc.text(`Card: ${item.toUpperCase()}`, 10, 20 + (i * 60));
    doc.addImage(qrDataUrl, 'PNG', 10, 25 + (i * 60), 40, 40);
  }

  doc.save('my-smart-cards.pdf');
  console.log("PDF generated successfully!");
}

generatePDF();