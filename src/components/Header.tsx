"use client";
import { ItemMenu } from "./ItemMenu";
import { Container } from "./Container";
import { UserCircle2 } from 'lucide-react';
import { LogOut } from 'lucide-react';
import Image from "next/image";
import Logo from "../img/logo.png";
import Link from "next/link";
import { useContext } from "react";
import { ClienteContext } from "../contexts/cliente"

export function Header() {

  const { clienteNome, mudaId, mudaNome } = useContext(ClienteContext);

  function logout() {

    if (confirm("Confirma a saída do sistema? ")) {
      mudaId(0)
      mudaNome("")

      localStorage.removeItem("clienteNome")
      localStorage.removeItem("clienteId")
      window.location.reload()

    }

  }
  return (
    <div className="relative">
      <header className="flex items-center w-full h-20 bg-primary-red">
        <div className="flex mx-auto">
          <Container>
            <div className="flex items-center justify-between">
              <ul className="flex items-center gap-12">
                <li>
                  <ItemMenu name="Comprar" />
                </li>
                <li>
                  <Link href="/">
                    <Image src={Logo} alt="Logo" width={150} />
                  </Link>
                </li>
                <li>
                  <ItemMenu name="Vender" />
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </header>
      <div className="absolute top-6 right-5">
        <li className="flex items-center gap-2 px-5 relative float-right">
          {clienteNome ? clienteNome : "Identifique-se"}
          {
            clienteNome ?
              <i className="ms-2 fs-4 bi bi-person-fill-down" style={{ cursor: 'pointer' }} onClick={logout}><LogOut /></i> :
              <Link href="/logar" className="text-primary-gray"><UserCircle2 /></Link>
          }

        </li>
      </div>
    </div>
  );

}

{/* <li>
    <ItemMenu name="Cadastre-se" />
  </li> */}