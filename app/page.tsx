import Image from "next/image";
import { Press_Start_2P } from "next/font/google";

export const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    
    <div className="bg-black text-white">

      <section className="relative w-full h-110 overflow-hidden">
        {/* Video nền */}
        <video
          src="/video/hero.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

      
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-6xl mx-auto px-4 gap-6">
          <h1 className={`${pixelFont.className} text-5xl text-white`}>
            Lær programmering raskere og mer effektivt
          </h1>
          <p className="text-lg text-gray-200 ">
           Fra nybegynner til proff – start reisen her
          </p>
          <a href="/Faginnhold">
            <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-md font-semibold text-10">
              Begynn å lære
            </button>
          </a>
          
        </div>
      </section>

        <h2 className ={`${pixelFont.className} } text-2xl p-6 text-center font-black tracking-wider bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent`}>
          Reis gjennom programmeringens verden
        </h2>
        <p className="text-center">Lær å kode med morsomme, interaktive kurs håndlaget av bransjeeksperter og lærere.</p>
      
      <section className="max-w-6xl mx-auto px-4 py-20">
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Tính năng 1</h3>
            <p className="text-gray-300">Mô tả tính năng 1 ngắn gọn và súc tích.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Tính năng 2</h3>
            <p className="text-gray-300">Mô tả tính năng 2 ngắn gọn và súc tích.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <svg className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Tính năng 3</h3>
            <p className="text-gray-300">Mô tả ngắn gọn...</p>
          </div>
        </div>
        <div className="flex justify-center">
          <a href="/Faginnhold">
            <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-md font-semibold">
              Utforsk alle kursene
            </button>
          </a>
        </div>
      </section>

      
    </div>
  );
  
}
