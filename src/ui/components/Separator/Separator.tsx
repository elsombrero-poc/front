import clsx from "clsx"

export const Separator = ({children}: {children: string}) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-2 w-full',
        'before:block before:w-full before:h-[1px] before:bg-slate-300',
        'after:block after:w-full after:h-[1px] after:bg-slate-300',
      )}
    >
      <div className="text-slate-400 w-full text-sm">
        {children}
      </div>
    </div>
  )
}