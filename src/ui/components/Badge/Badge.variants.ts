import React from "react"
import { ISize } from "../../types/size"
import { ITheme } from "../../types/theme"

export interface BadgeProps {
  size?: ISize,
  radius?: ISize | 'circular',
  theme?: ITheme | 'disabled' | 'warning',
  children: React.ReactNode,
  className?: string,
}

export const variants = {
  size: {
    'sm': 'w-[25px] h-[25px] text-xs',
    'md': 'w-[35px] h-[35px] text-sm',
    'lg': 'w-[40px] h-[40px] text-md',
    'xl': 'w-[45px] h-[45px] text-lg',
    '2xl': 'w-[50px] h-[50px] text-xl'
  },
  radius: {
    'sm': 'rounded-sm',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'xl': 'rounded-xl',
    '2xl': 'rounded-2xl',
    'circular': 'rounded-[50%]',
  },
  theme: {
    'danger': 'bg-rose-500 text-white',
    'warning': 'bg-orange-400 text-white',
    'dark': 'bg-slate-800 text-white',
    'disabled': 'bg-slate-200 text-slate-400',
    'white': 'bg-white text-slate-800'
  }
}