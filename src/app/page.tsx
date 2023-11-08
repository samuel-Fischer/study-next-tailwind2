'use client';
import { CarroType } from "../types/CarroType";
import Pesquisa from "../components/Pesquisa";
import Carro from "../components/Carro";
import { useEffect, useState } from "react";

export default function Home() {
  const [carros, setCarros] = useState<{ carro: CarroType }[]>([]);

  useEffect(() => {
    async function getCarros() {
      const response = await fetch("http://localhost:3004/carros?destaque=true");
      const data = await response.json();
      setCarros(data);
    }
    getCarros();
  }, []);

  function filtrarCarros(data: any) {
    async function getCarros() {
      const response = await fetch(
        "http://localhost:3004/carros?marca_like=" + data.pesq
      );
      const dados = await response.json();
      setCarros(dados);
    }
    getCarros();
  }

  return (
    <>
      <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
        <div className="flex justify-end px-0">
          <Pesquisa
            filtrarCarros={filtrarCarros} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
          {carros.map((carro) => (
            <Carro key={carro.id} carro={carro} />
          ))}
        </div>

      </div>
    </>
  )
}
