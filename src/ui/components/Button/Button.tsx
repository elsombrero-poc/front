import clsx from "clsx"
import { ButtonProps, variants } from "./Button.variants"

export const Button = ({size, radius, variant, theme, ...props}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        'border font-medium transition duration-200',
        variants.size[size || 'md'],
        variants.radius[radius || 'md'],
        variants.variant[variant || 'primary'][theme || 'white'],
        props.className,
      )}
    />
  )
}