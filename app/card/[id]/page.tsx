export default function CardPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Card ID: {params.id}</h1>
    </div>
  );
}