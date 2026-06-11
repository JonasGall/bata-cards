// app/card/[id]/page.tsx
export const dynamic = 'force-dynamic'; // Ito ang magpipilit sa Vercel na i-render ito ng tama

export default async function CardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Card ID: {id}</h1>
      <p>Success! Dynamic route is working.</p>
    </div>
  );
}