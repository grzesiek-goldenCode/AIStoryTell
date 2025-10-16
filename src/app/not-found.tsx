export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Wybrałeś złą ścieżkę</h1>
      <p className="text-gray-500 mb-6">Spróbuj wrócić do strony głównej.</p>
      <a href="/" className="text-yellow-600 hover:underline">
        ← Powrót do strony głównej
      </a>
    </div>
  );
}
