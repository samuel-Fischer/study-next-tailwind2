"use client";
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type ClienteContextType = {
  clienteId: number | null;
  clienteNome: string;
  mudaId: (id: number) => void;
  mudaNome: (nome: string) => void;
};

export const ClienteContext = createContext<ClienteContextType>({
  clienteId: null,
  clienteNome: '',
  mudaId: (id) => {},
  mudaNome: (nome) => {},
});

type ClienteProviderProps = {
  children: ReactNode;
};

function ClienteProvider({ children }: ClienteProviderProps) {
  const [clienteId, setClienteId] = useState<number | null>(null);
  const [clienteNome, setClienteNome] = useState('');
  const [clienteIsAdmin, setClienteIsAdmin] = useState(false);

  useEffect(() => {
    const clienteString = localStorage.getItem('cliente_logado');
    if (clienteString) {
      const cliente = JSON.parse(clienteString);
      setClienteId(cliente.id);
      setClienteNome(cliente.nome);
      setClienteIsAdmin(cliente.isAdmin);
    }
  }, []);

  function mudaId(id: number) {
    setClienteId(id);
  }

  function mudaNome(nome: string) {
    setClienteNome(nome);
  }

  return (
    <ClienteContext.Provider value={{ clienteId, clienteNome, mudaId, mudaNome }}>
      {children}
    </ClienteContext.Provider>
  );
}

export default ClienteProvider;
