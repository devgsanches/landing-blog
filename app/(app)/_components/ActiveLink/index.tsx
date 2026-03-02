'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const ActiveLink = ({ href, children, className }: ActiveLinkProps) => {
  const router = usePathname()

  console.log(router);


  const isActive = router === href || router.startsWith(`${href}/`)

  return (<Link href={href} className={cn('text-gray-100 hover:text-blue-200 transition-all duration-300', isActive && 'text-blue-200', className)}>
    {children}
  </Link>)
}
