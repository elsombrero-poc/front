import { HTMLAttributes } from "react";
import { ISize } from "../../types/size";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  shadow?: ISize;
  radius?: ISize;
}

export const variants = {
  shadow: {
    'sm': 'shadow-sm',
    'md': 'shadow-md',
    'lg': 'shadow-lg',
    'xl': 'shadow-xl',
    '2xl': 'shadow-2xl'
  },
  radius: {
    'sm': 'rounded-sm',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'xl': 'rounded-xl',
    '2xl': 'rounded-2xl'
  }
}