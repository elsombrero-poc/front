import { ISize } from "../../types/size"
import { ITheme } from "../../types/theme"

export interface TextBadgeProps {
  size?: ISize,
  radius?: ISize,
  theme?: ITheme | 'warning',
  children: React.ReactNode,
}

export const variants = {
  size: {
    'sm': 'p-1 text-sm',
    'md': 'px-3 p-1 text-md',
    'lg': 'px-4 py-2 text-lg',
    'xl': 'px-5 py-3 text-xl',
    '2xl': 'px-6 py-4 text-2xl'
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
    'danger': 'bg-rose-500 text-rose-500',
    'warning': 'bg-yellow-300 text-yellow-300',
    'dark': 'bg-slate-800 text-slate-800',
    'white': 'bg-white text-white'
  }
}