'use client';
import { useEffect, useState } from 'react';
import CarroInfo from '@/src/components/CarroInfo';
import Proposta from '@/src/components/Proposta';
import { CarroType } from '@/src/types/CarroType';
import { PropostaType } from '@/src/types/PropostaType';
import { useParams } from 'next/navigation';

export default function Example() {
  const [carro, setCarro] = useState<CarroType | null>(null);
  const [propostas, setPropostas] = useState<PropostaType[] | null>(null);
  const params = useParams();

  useEffect(() => {
    async function getCarro() {
      try {
        const response = await fetch(`http://localhost:3004/carro/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setCarro(data);
        } else {
          console.error('Erro ao buscar dados do veículo.');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }

    async function getPropostas() {
      try {
        const response = await fetch(`http://localhost:3004/proposta/${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setPropostas(data);
        } else {
          console.error('Erro ao buscar propostas para este veículo.');
        }
      } catch (error) {
        console.error('Erro na requisição das propostas:', error);
      }
    }

    getCarro();
    getPropostas();
  }, [params.id]);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <CarroInfo carro={carro} />
          <Proposta propostas={propostas} />
        </div>
      </div>
    </div>
  );
}
