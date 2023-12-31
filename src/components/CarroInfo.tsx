'use client';
import { useState } from "react";
import { CalendarDays, Gauge } from "lucide-react";
import { CarroType } from "../types/CarroType";
import CarroImage from "./CarroImage";
import { formatKilometers, formatPrice } from "../lib/utils";
import { ClienteContext } from "../contexts/cliente";
import { useContext } from "react";
import { PropostaType } from "../types/PropostaType";
import { Modal } from "./Modal";
import Link from "next/link";

const reviews = {
  quantity: 117,
  href: '#',
};

type CarroProps = {
  carro: CarroType;
  proposta: PropostaType;
};

export default function CarroInfo({ carro, proposta }: CarroProps) {
  const { clienteNome, clienteId } = useContext(ClienteContext); // Adicionando clienteId

  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para controlar a visibilidade do modal

  const handleFazerOfertaClick = () => {
    setIsModalVisible(true); // Exibe o modal quando o botão "Fazer oferta" é clicado
  };

  if (!carro) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:flex">
            <div className="lg:w-1/3">
              <div className="aspect-h-3 aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <CarroImage carro={carro} fill />
              </div>
            </div>
            <div className="lg:w-2/3 lg:pl-8">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:pb-2">
                  {carro.marca}
                </h1>
                <div className="lg:border-b lg:border-gray-200 lg:pb-3">
                  <h3 className="sr-only">Description</h3>
                  <div className="space-y-6">
                    <p className="text-base text-gray-900">{carro.sobre}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between mb-6">
                    <div>
                      <h2 className="sr-only">Product information</h2>
                      <p className="text-3xl tracking-tight text-primary-red">{formatPrice(carro.preco)}</p>
                    </div>
                    {clienteNome && (
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <Link href={reviews.href} className="text-sm font-medium ml-3 text-indigo-500 hover:text-indigo-600">{reviews.quantity} Ofertas</Link>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="block">
                    <div>
                      <p>Data</p>
                      <div className="flex items-center mb-4">
                        <CalendarDays className="mr-1" />
                        <p>{carro.ano_id}/{+carro.ano_id + 1}</p>
                      </div>
                    </div>
                    <div>
                      <p>Quilometragem</p>
                      <div className="flex items-center">
                        <Gauge className="mr-1" />
                        <p>{formatKilometers(carro.quilometragem)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {clienteNome && (
                  <div className="pb-10">
                    <button
      type="submit"
      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-red px-8 py-3 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
      onClick={() => setIsModalVisible(true)} // Chame a função que define a visibilidade do modal como verdadeira
    >
      Fazer oferta
    </button>
    {isModalVisible && (
      <Modal
      isVisible={isModalVisible}
      onClose={() => setIsModalVisible(false)}
      cliente_id={clienteId}
      nome={clienteNome}
      carro_id={carro.id}
      date={new Date().toISOString()}
      foto="https://source.unsplash.com/random"
    />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}