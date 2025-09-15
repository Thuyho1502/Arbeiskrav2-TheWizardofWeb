import Image from "next/image";
import { Press_Start_2P } from "next/font/google";

export const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    
    <div className="bg-black text-white">

      <section className="relative w-full h-100 overflow-hidden">
        {/* Video nền */}
        <video
          src="/video/hero.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay màu (tuỳ chọn, để text nổi bật hơn) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Nội dung text + button */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-6xl mx-auto px-4 gap-6">
          <h1 className={`${pixelFont.className} text-5xl text-white`}>
            Lær programmering raskere og mer effektivt
          </h1>
          <p className="text-lg text-gray-200">
           Dokumentasjon, øvelser og praktiske prosjekter hjelper deg med å forbedre kodeferdighetene dine.
          </p>
          <a href="/Faginnhold">
            <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-md font-semibold text-10">
              Starter
            </button>
          </a>
          
        </div>
      </section>


      {/* Feature cards */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Tính năng 1</h3>
          <p className="text-gray-300">Mô tả tính năng 1 ngắn gọn và súc tích.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Tính năng 2</h3>
          <p className="text-gray-300">Mô tả tính năng 2 ngắn gọn và súc tích.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Tính năng 3</h3>
          <p className="text-gray-300">Mô tả tính năng 3 ngắn gọn và súc tích.</p>
        </div>
       
      </section>    
    </div>
  );
  
}
