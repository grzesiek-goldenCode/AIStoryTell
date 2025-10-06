import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center h-[80vh]">
        <div className="flex flex-col items-center justify-center m-2">
          <h1 className="text-4xl m-3 ">Opowiem Ci Bajkę!</h1>
          <p className="text-md">Kliknij przycisk aby wejść do świata bajek</p>
          <p className="text-md">
            Bajka tworzona specjalnie dla Twojego dziecka!
          </p>
        </div>
        <div>
          <Button>
            <a href="/story">Stwórz bajkę</a>
          </Button>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
