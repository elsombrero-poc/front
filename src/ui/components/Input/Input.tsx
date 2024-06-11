import clsx from "clsx"
import { InputProps, variants } from "./Input.variants"

export const Input = ({left, right, radius, inputSize, boxClass, ...props}: InputProps) => {
  return (
    <div
      className={clsx(
        'border flex gap-2 items-center bg-white',
        variants.size[inputSize || 'md'],
        variants.radius[radius || 'md'],
        boxClass,
      )}>
        {left}
        <input
          {...props}
          className={clsx('focus-within:outline-0 w-full ', props.className)}
        />
        {right}
    </div>
  )
}