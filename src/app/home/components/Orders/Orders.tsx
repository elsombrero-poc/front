'use client';
import { useState } from "react";
import { OrderCard } from "./Order/Order"
import { Toggler } from "../../../../shared/Toggler/Toggler"
import { Metadata } from "../../../../api/types";
import { useBackOffice } from "../../../../api/bo/client";

export const Orders = ({metadata}: {metadata: Metadata}) => {
  const [isArchive, setIsArchive] = useState(false);
  const { wordings } = useBackOffice(metadata);

  return (
    <div className="flex flex-col gap-8">
      <Toggler
        titles={[
          wordings('orders.toggle.last-shipping', 'Fallback'),
          wordings('orders.toggle.archives', 'Fallback')
        ]}
        active={isArchive}
        onClick={() => setIsArchive(!isArchive)}
      />
      <div className="flex flex-col gap-3 w-full">
        <strong className="text-slate-400">April 2021</strong>
        <OrderCard active />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <strong className="text-slate-400">March 2021</strong>
        <OrderCard />
      </div>
    </div>
  )
}