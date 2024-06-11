import clsx from "clsx"
import { BadgeProps, variants } from "./Badge.variants"

export const Badge = ({children, radius, size, theme, className}: BadgeProps) => {
  return (
    <div className={clsx(
      'flex justify-center items-center',
      variants.radius[radius || 'md'],
      variants.size[size || 'md'],
      variants.theme[theme || 'dark'],
      className,
    )}>
      {children}
    </div>
  )
}