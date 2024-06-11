import { ITheme } from "../../ui/types/theme"

export interface TogglerProps {
  theme?: ITheme | 'warning',
  active?: boolean,
  onClick?: () => void,
  titles: [string, string],
}

export const variants = {
  themes: {
    'danger': {
      text: 'text-rose-500',
      before: 'before:border-rose-500',
    },
    'warning': {
      text: 'text-yellow-500',
      before: 'before:border-yellow-500',
    },
    'dark': {
      text: 'text-slate-800',
      before: 'before:border-slate-800',
    },
    'white': {
      text: 'text-slate-800',
      before: 'before:border-slate-200',
    }
  }
}