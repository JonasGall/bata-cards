export default function CardPage({ params }) {
  const { id } = params; // Ito ang "apple", "ball", etc.

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Ito ang card para sa: {id}</h1>
      <p>Dito natin ilalagay ang audio player!</p>
    </div>
  );
}