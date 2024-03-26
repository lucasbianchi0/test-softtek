'use client'
import Image from "next/image";
import { useState } from "react";
import Results from "./components/Results";
import Input from "./components/Input";

export default function Home() {
  const [resultadoInput, setResultadoInput] = useState(null);

  const handleFormSubmit = (input) => {
    setResultadoInput(input);
  };

  return (
    <main className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ">
      <div className="flex flex-col gap-4 lg:gap-1 lg:w-[800px] mx-auto animate-fade-up animate-duration-[2000ms] ">
        <h1 className="text-[32px] font-bold text-center lg:text-[80px]">Hola Juli y Marcos</h1>
        <p className="text-md text-center lg:text-[24px] max-w-[80%] mx-auto text-zinc-300 ">Me encantaria empezar en Softtek, les dejo una UI con la resolucion del ejercicio</p>
        <Input onSubmit={handleFormSubmit} />
        {resultadoInput && (
          <Results data={resultadoInput}/>
        )}
       
      </div>
    </main>
  );
}

