import { HTMLAttributes } from "react";
import { ISize } from "../../types/size";
import { ITheme } from "../../types/theme";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  theme?: ITheme | 'warning',
  variant?: 'light' | 'primary' | 'outline',
  size?: ISize,
  radius?: ISize,
}

const LightProperty = 'bg-white hover:bg-slate-100 active:bg-slate-200'

export const variants = {
  variant: {
    'light': {
      'danger': `${LightProperty} text-rose-500`,
      'dark': `${LightProperty} text-slate-950`,
      'white': `${LightProperty} bg-transparent text-white`,
      'warning': `${LightProperty} text-yellow-500`,
    },
    'primary': {
      'danger': 'bg-rose-500 text-white hover:bg-rose-700 active:bg-rose-800',
      'dark': 'bg-slate-700 text-white hover:bg-slate-800 active:bg-slate-950',
      'white': 'bg-white text-slate-800 hover:bg-slate-100 active:bg-slate-200',
      'warning': 'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700',
    },
    'outline': {
      'danger': 'border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white active:bg-rose-700',
      'dark': 'border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white active:bg-slate-950',
      'white': 'bg-transparent text-white hover:bg-white hover:text-slate-800 active:bg-slate-100',
      'warning': 'border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white active:bg-yellow-600',
    },
  },
  size: {
    'sm': 'p-2 text-sm',
    'md': 'px-3 py-2 text-md',
    'lg': 'px-4 py-2 text-lg',
    'xl': 'px-5 py-3 text-xl',
    '2xl': 'px-6 py-4 text-2xl'
  },
  radius: {
    'sm': 'rounded-sm',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'xl': 'rounded-xl',
    '2xl': 'rounded-2xl'
  }
}