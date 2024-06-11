import clsx from "clsx"
import { TextBadgeProps, variants } from "./TextBadge.variants"

export const TextBadge = ({children, radius, size, theme}: TextBadgeProps) => {
  return (
    <div
      className={clsx(
        'bg-opacity-20 w-fit',
        variants.radius[radius || 'md'],
        variants.size[size || 'md'],
        variants.theme[theme || 'dark']
      )}
    >
      {children}
    </div>
  )
}