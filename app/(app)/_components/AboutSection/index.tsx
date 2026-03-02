import Image from "next/image";
import { Badge } from "../Badge";
import { Card } from "../Card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const AboutSection = () => (
  <div className="flex flex-col gap-6 pb-30">
    <div className="flex items-center gap-6 w-full">
      <div className="w-full">
        <Card>
          <div className="space-y-4 w-full">
            <Badge>simples</Badge>
            <h2 className="heading-lg max-w-100">Crie um catálogo de produtos online em poucos minutos</h2>
          </div>
        </Card>
      </div>
      <div className="w-full">
        <Card>
          <div className="space-y-4 w-full">
            <Badge>prático</Badge>
            <h2 className="heading-lg max-w-100">Venda para seu público através de uma plataforma única
            </h2>
          </div>
        </Card>
      </div>
    </div>
    <div>
      <Card>
        <div className="flex  justify-between">
          <div className="w-full flex flex-col justify-between">
            <div className="flex flex-col gap-4"><Badge>personalizável</Badge>
              <h2 className="heading-lg max-w-85">Tenha uma loja online personalizada com a cara da sua marca
              </h2>
            </div>
            <Button variant="default" size="lg" className="rounded-full text-base max-w-47">Criar loja grátis <ArrowRight className="size-5" /></Button>
          </div>
          <Image src="/decorate.svg" alt="About Section" width={440} height={327} />
        </div>
      </Card>
    </div>
  </div>
)
