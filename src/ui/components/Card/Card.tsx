import clsx from "clsx"
import { CardProps, variants } from "./Card.variants";

export const Card = ({ shadow, radius, ...props }: CardProps) => {
  return (
    <div
      {...props}
      className={clsx(
        'w-fit p-3 border',
        variants.shadow[shadow || 'md'],
        variants.radius[radius || 'md'],
        props.className,
      )}
    />
  )
}