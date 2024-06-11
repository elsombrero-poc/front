import Image from "next/image"
import { Card } from "../../../../../ui/components/Card/Card"
import clsx from "clsx"

export const OrderCard = ({active}: {active?: boolean}) => {
  return (
    <Card radius="lg" shadow={active ? 'lg' : 'sm'} className={clsx(
      'w-full flex flex-col gap-3 transition-all bg-white',
      !active && 'grayscale cursor-pointer hover:bg-slate-50 active:bg-slate-100'
    )}>
      <div className="flex items-center gap-2">
        <Image
          width={45}
          height={45}
          src="/images/logistics-delivery.png"
          alt="box-delivery"
        />
        <strong className="text-red-500">[shipping_number]</strong>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-1">
          <strong className="text-slate-800">[from]</strong>
          <small className="text-slate-400">[date]</small>
        </div>
        <div className="flex flex-col gap-1">
          <strong className="text-slate-800 text-right">[destination]</strong>
          <small className="text-slate-400 text-right">[date]</small>
        </div>
      </div>
    </Card>
  )
}