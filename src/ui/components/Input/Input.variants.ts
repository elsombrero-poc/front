import React, { InputHTMLAttributes } from "react";
import { ISize } from "../../types/size";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: ISize,
  radius?: ISize,
  left?: React.ReactElement,
  right?: React.ReactElement,
  boxClass?: string,
}

export const variants = {
  size: {
    'sm': 'px-2 py-1 text-sm gap-1',
    'md': 'px-2 py-2 text-md gap-2',
    'lg': 'px-3 py-3 text-lg gap-3',
    'xl': 'px-4 py-4 text-xl gap-4',
    '2xl': 'px-5 py-4 text-2xl gap-5'
  },
  radius: {
    'sm': 'rounded-sm',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'xl': 'rounded-xl',
    '2xl': 'rounded-2xl'
  }
}