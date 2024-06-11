'use client'
import clsx from 'clsx'
import styles from './Toggler.module.scss'
import { TogglerProps, variants } from './Toggler.variants'

export const Toggler = ({active, onClick, titles, theme}: TogglerProps) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      className={clsx(
        'flex text-slate-700 font-medium w-full bg-slate-200 cursor-pointer rounded-xl',
        variants.themes[theme || 'white'].before,
        active && styles.active,
        styles.toggle,
      )}
    >
      <div
        className={clsx(
          'w-[50%] flex items-center justify-center z-10 transition-all duration-200',
          !active && variants.themes[theme || 'white'].text,
        )}
      >
        {titles[0]}
      </div>
      <div
        className={
          clsx(
            'w-[50%] flex items-center justify-center z-10 transition-all duration-200',
            active && variants.themes[theme || 'white'].text,
          )}
        >
        {titles[1]}
      </div>
    </div>
  )
}