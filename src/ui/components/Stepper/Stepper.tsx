import React from "react"
import { Badge } from "../Badge/Badge"
import styles from "./Stepper.module.scss"
import Error from "next/error"
import clsx from "clsx"

interface StepperProps {
  step: number,
  steps: {
    icon: React.ReactNode,
    title: string,
    subtitle?: string,
  }[],
}

export const Stepper = ({ steps, step, }: StepperProps) => {


  return (
    <div className="w-full flex justify-between">
      {
        steps.map((s, index) => (
          <div
            key={`${s.title}-${index}`}
            className={clsx(
              'flex flex-col items-center gap-2 w-full after:bg-slate-200',
              styles.item,
              step > index && 'after:bg-gradient-to-r after:from-rose-500 after:to-orange-400'
            )}
          >
            <div className="flex items-center z-10">
              <Badge radius="circular" size="md" theme={step >= index ? ( step === index ? 'warning' : 'danger') : 'disabled'}>
                {s.icon}
              </Badge>
            </div>
            <div className="flex flex-col text-center h-[35px]">
              <small className={clsx('font-medium', index === step && 'text-orange-400')}>{s.title}</small>
              <small className="text-slate-400">{s.subtitle}</small>
            </div>
          </div>
        ))
      }
    </div>
  )
}