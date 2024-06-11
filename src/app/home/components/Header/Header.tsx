'use client'
import { Input } from "../../../../ui/components/Input/Input"
import { useBackOffice } from "../../../../api/bo/client"
import { Metadata } from "../../../../api/types"

export const ShippingHeader = ({metadata}: {metadata: Metadata}) => {
  const { wordings } = useBackOffice(metadata)

  return (
    <header className="flex">
      <div className="flex justify-between items-center w-screen">
        <Input
          boxClass="w-1/4"
          radius="xl"
          right={<i className="fa fa-search"></i>}
          placeholder={wordings('form.input-search.placeholder', '')}
        />
        <div className="flex gap-3 items-center">
          <div className="flex w-[35px] rounded-full h-[35px] bg-amber-500 items-center justify-center text-white">
            <strong>RP</strong>
          </div>
          <strong>Rachel Pinkman</strong>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </header>
  )
}