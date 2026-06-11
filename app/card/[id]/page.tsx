// app/card/[id]/page.tsx
export default async function CardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Card ID: {id}</h1>
    </div>
  );
}