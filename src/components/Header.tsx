import { ItemMenu } from "./ItemMenu";
import { Container } from "./Container";
import { UserCircle2 } from 'lucide-react';
import Image from "next/image";
import Logo from "../img/logo.png";
import Link from "next/link";


export function Header() {
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
          <ItemMenu name="Logar" />
          <p className="text-primary-gray"><UserCircle2 /></p>
        </li>
      </div>
    </div>
  );

}

{/* <li>
    <ItemMenu name="Cadastre-se" />
  </li> */}