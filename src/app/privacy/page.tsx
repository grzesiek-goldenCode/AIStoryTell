export default function Privacy() {
  return (
    <main className="prose prose-lg mx-auto px-4 py-10 text-gray-800">
      <h1>Polityka Prywatności</h1>
      <p>Ostatnia aktualizacja: 10 października 2025 r.</p>

      <h2>1. Informacje ogólne</h2>
      <p>
        Aplikacja <strong>Utkane Opowieści</strong> umożliwia tworzenie
        spersonalizowanych bajek przy pomocy sztucznej inteligencji. Szanujemy
        prywatność użytkowników i nie gromadzimy żadnych danych osobowych.
      </p>

      <h2>2. Jakie dane są przetwarzane</h2>
      <p>
        Aplikacja nie zbiera, nie przechowuje i nie przesyła żadnych danych
        osobowych na serwer. Wszystkie wprowadzone przez użytkownika informacje
        (np. imię dziecka, temat bajki) służą wyłącznie do wygenerowania treści
        bajki i nie są nigdzie zapisywane poza przeglądarką użytkownika.
      </p>

      <h2>3. Dane lokalne (localStorage)</h2>
      <p>
        Wygenerowane bajki są tymczasowo zapisywane w pamięci przeglądarki (
        <code>localStorage</code>), aby użytkownik mógł do nich wrócić w trakcie
        korzystania z aplikacji. Dane te nie są przesyłane do serwera i mogą być
        w każdej chwili usunięte przez użytkownika.
      </p>

      <h2>4. Ciasteczka (cookies)</h2>
      <p>Aplikacja nie wykorzystuje plików cookie ani narzędzi śledzących.</p>

      <h2>5. Zewnętrzne usługi</h2>
      <p>
        Aplikacja korzysta z API OpenAI do generowania treści bajek. Dane
        wprowadzone przez użytkownika są przetwarzane przez system OpenAI
        wyłącznie w celu wygenerowania treści bajki. Aplikacja nie przechowuje
        tych danych.
      </p>
      <p>
        Więcej informacji o polityce prywatności OpenAI:
        <a
          href="https://openai.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://openai.com/privacy
        </a>
      </p>

      <h2>6. Prawa użytkownika</h2>
      <p>
        Ponieważ aplikacja nie gromadzi danych osobowych, nie ma potrzeby
        składania wniosków o ich usunięcie czy wgląd. Wszelkie dane
        przechowywane lokalnie mogą być samodzielnie usunięte przez użytkownika.
      </p>

      <h2>7. Kontakt</h2>
      <p>
        W sprawach związanych z działaniem aplikacji możesz się skontaktować
        poprzez e-mail:
        <br />
        <a href="mailto:grzesiekcode@gmail.com">Grzesiekcode@gmail.com</a>
      </p>
    </main>
  );
}
