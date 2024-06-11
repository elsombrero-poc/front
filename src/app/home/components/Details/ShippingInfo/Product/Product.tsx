import Image from "next/image"
import { Card } from "../../../../../../ui/components/Card/Card"
import { TextBadge } from "../../../../../../ui/components/TextBadge/TextBadge"

export const ShippingProduct = () => {
  return (
    <Card radius="xl" className="flex items-center text-white justify-between flex-wrap gap-10 bg-gradient-to-r from-indigo-900 via-cyan-900 to-indigo-950 w-full p-9">
      <div className="flex gap-8">
        <Image
          width={100}
          height={100}
          src="/images/mock/product.jpg"
          alt="product"
          className="w-[150px] h-[150px] rounded-lg object-cover"
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <strong className="text-2xl">[name]</strong>
            <p className="text-slate-400 text-sm max-w-[320px] line-clamp-2">[Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem similique]</p>
          </div>
          <div className="flex flex-col">
            <strong className="text-xl">
              <span>[€ 599]</span>
              <small className="text-[12px] relative bottom-[5 px]">.00</small>
            </strong>
            <p className="text-green-300">€ [delivery_price]</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-10">
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <p className="text-slate-400">Seller</p>
            <div className="flex gap-3 items-center">
              <i className="fa-brands fa-apple text-[25px]"></i>
              <p className="uppercase text-lg">[Apple]</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-slate-400">Order number</p>
            <TextBadge theme="warning" size="md">
              [023652]
            </TextBadge>
          </div>
        </div>
        <div className="flex flex-col gap-2">
            <p className="text-slate-400">Order number</p>
            <div className="flex gap-3 items-center text-xl">
              <p>[57 Wescam Court, Boston, MA, USA]</p>
            </div>
          </div>
      </div>
    </Card>
  )
}