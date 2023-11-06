import { CalendarDays, Gauge } from "lucide-react";
import { CarroType } from "../types/CarroType";
import CarroImage from "./CarroImage";

type CarroProps = {
  carro: CarroType;
};

export default function Carro({ carro }: CarroProps) {
  return (
    <div className="flex flex-col shadow-lg h-96 bg-carro-card p-5">
      <div className="relative max-h-72 flex-1">
        <CarroImage carro={carro} fill />
      </div>
      <div className="flex justify-between my-3">
        <p className="w-40 truncate font-bold">{carro.marca}</p>
        <p className="text-md text-primary-red">R$ {carro.preco}</p>
      </div>
      <div className="flex justify-between mb-3">
        <p className="flex items-center truncate">
          <CalendarDays className="mr-1" /> {carro.ano}/{+carro.ano + 1}
        </p>
        <p className="flex items-center text-md">
          <Gauge className="mr-1" /> {carro.quilometragem} Km
        </p>
      </div>
      <button className="rounded-md bg-primary-red hover:bg-red-600 text-white p-3 py-2.5 text-sm text-center">
        Ver Mais
      </button>

    </div>
  )
}