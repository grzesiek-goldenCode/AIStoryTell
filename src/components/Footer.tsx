export default function Footer() {
  return (
    <div className="footer-container ">
      <a href="/privacy">Polityka Prywatności 👈</a>
      <p>Wszelkie prawa zastrzeżone</p>

      <p>
        <span className="text-amber-300">GoldenCode</span> · design &
        development by Grzegorz Szuba
      </p>
      <p>@{new Date().getFullYear()}</p>
    </div>
  );
}
