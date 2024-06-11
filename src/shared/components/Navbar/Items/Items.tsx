import clsx from "clsx"
import Link from "next/link"
import React from "react"

export const NavbarItem = ({active, children, href}: {children: React.ReactNode, active?: boolean, href?: string}) => {
  return (
    <Link href={href || '/'} className={clsx(
      'w-full flex gap-2 p-2 rounded-xl items-center text-slate-800 justify-center text-sm',
      active && 'bg-slate-800 text-white shadow-xl',
      !active && 'cursor-pointer hover:bg-slate-100 active:bg-slate-200 transition-all duration-200',
    )}>
      {children}
    </Link>
  )
}