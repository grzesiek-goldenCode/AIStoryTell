"use client";
import { useState } from "react";
import Button from "./Button";

const errorTimeout = 3000;

type Props = {
  onGenerate: (data: { name: string; theme: string; age: string }) => void;
};

export default function StoryForm({ onGenerate }: Props) {
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      name.slice().length === 0 ||
      theme.slice().length === 0 ||
      age.slice().length === 0
    ) {
      setError("Wypełnij wszystkie pola żeby stworzyć bajkę!");
      setTimeout(() => setError(""), errorTimeout);
    } else {
      onGenerate({ name, theme, age });
    }
  }
  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Imię bohatera"
        className="input-element"
        maxLength={30}
      />
      {name.length > 25 && <p className="text-red-400">{name.length} / 30</p>}
      <input
        name="theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        placeholder="Temat bajki"
        className="input-element"
        maxLength={300}
      />
      {theme.length > 250 && (
        <p className="text-red-400">{theme.length} / 300</p>
      )}
      <select
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="input-element"
      >
        <option>Podaj wiek dziecka</option>
        <option value="3">3 lata</option>
        <option value="5">5 lat</option>
        <option value="7">7 lat</option>
        <option value="10">10 lat</option>
      </select>
      <Button>Stwórz bajkę!</Button>
      {error && <p className="text-red-500 text-sm m-3">{error}</p>}
    </form>
  );
}
