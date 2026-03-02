import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Store } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TypingText from "../TypingText";

export const HeroSection = () => (
  <div className="text-gray-100 flex items-center justify-between">
    <div className="flex flex-col max-w-3xl mx-auto">
      <div className="flex flex-col gap-8">
        <TypingText text='Venda seus produtos como afiliado em um único lugar.' />
        <div className="flex flex-col gap-3 text-gray-200">
          <div className="flex items-center gap-3">
            <Clock color="#2DEBFC" /> <p>Crie o seu site em menos de 5 minutos</p>
          </div>
          <div className="flex items-center gap-3">
            <Store color="#2DEBFC" /> <p>Acompanhe e otimize seu negócio online</p>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-4 max-w-50">
        <Button variant="default" size="lg" className="rounded-full text-base">Criar loja grátis <ArrowRight className="size-5" /></Button>
        <Link href="/" className="text-gray-300 text-xs hover:text-white transition-all duration-300">Não precisa de cartão de crédito</Link>
      </div>
    </div>

    <div className="flex justify-end">
      <Image src="/hero.png" alt="Image" width={471} height={491} />
    </div>
  </div>
)
