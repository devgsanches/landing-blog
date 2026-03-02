'use client'

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { ActiveLink } from "../ActiveLink";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter()

  return (
    <nav className="border-b-2 border-gray-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
        <div><Image src="/logo.svg" alt="Logo" width={100} height={100} className="hidden md:flex" />
          <Image src="/mobile-logo.svg" alt="Logo" width={41} height={40} className="flex md:hidden" /></div>
        <nav className="flex items-center md:gap-6 gap-2 font-body">
          <ActiveLink href="/" className="hidden md:flex">Início</ActiveLink>
          <ActiveLink href="/blog" className="hidden md:flex">Blog</ActiveLink>
          <Button variant="secondary" className="rounded-full" onClick={() => router.push('/start')}> Começar</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="rounded-full md:hidden">
                <Menu color="#E9EAEC" size={20} strokeWidth={2.5} />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-gray-700 w-full flex flex-col justify-center items-center">

              <nav className="flex flex-col max-w-60 gap-2">
                <Button variant={'link'} className="text-lg">Início</Button>
                <Button variant={'link'} className="text-lg">Blog</Button>
                <Button variant="secondary" className="rounded-full text-lg">Começar</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div >
    </nav >
  )
}
