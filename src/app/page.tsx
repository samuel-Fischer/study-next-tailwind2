"use client";
import { CarroType } from "../types/CarroType";
// import Pesquisa from "../components/Pesquisa";
import Carro from "../components/Carro";

async function getCarros() {
  const res = await fetch('http://localhost:3004/carros') 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Home() {
  const carros = await getCarros();

  return (
      // <Pesquisa />
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">

        {carros.map((carro: CarroType) => (
          <Carro key={carro.id} carro={carro}></Carro>
        ))}
      </div>
      
    </div>
  )
}
