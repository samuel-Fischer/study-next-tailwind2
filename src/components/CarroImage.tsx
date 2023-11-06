'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { CarroType } from "../types/CarroType";

type CarroImageProps = {
  carro: CarroType
  fill?: boolean
};

export default function CarroImage({ carro, fill }: CarroImageProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(carro.imagem);
        if (response.ok) {
          setLoading(false);
        }
      } catch (error) {
        console.error('Erro ao buscar a imagem:', error);
      }
    }

    fetchData();
  }, [carro.imagem]);

  return fill ? (
    <Image
      src={carro.imagem}
      fill
      alt={carro.marca}
      className={`object-cover ${loading ? "scale-110 blur-3xl grayscale rounded-lg"
          : "scale-100 blur-0 grayscale-0 rounded-lg"
        }`}
      onLoadingComplete={() => setLoading(false)}
    />
  ) : (
    <Image
      src={carro.imagem}
      width={400}
      height={700}
      alt={carro.marca}
      className={`object-cover ${loading ? "scale-110 blur-3xl grayscale rounded-lg"
          : "scale-100 blur-0 grayscale-0 rounded-lg"
        }`}
      onLoadingComplete={() => setLoading(false)}
    />
  )
}