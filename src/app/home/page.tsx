import { ShippingHeader } from "./components/Header/Header";
import { Orders } from "./components/Orders/Orders";
import { ShippingInfo } from "./components/Details/ShippingInfo/ShippingInfo";
import { ShippingMap } from "./components/Details/Map/Map";
import { FetchMetadata } from "../../api/bo/server";
import { ClientWrapper } from "../../shared/store/wrapper/wrapper";

export default async function Shipping(){
  const { metadata } = await FetchMetadata('home')

  return (
    <main className="flex flex-col gap-8">
      <ClientWrapper metadata={metadata}>
        <ShippingHeader metadata={metadata} />
        <div className="flex gap-7">
          <div className="w-3/12">
            <Orders metadata={metadata} />
          </div>
          <div className="w-9/12 flex flex-col gap-10">
            <ShippingInfo />
            <ShippingMap />
          </div>
        </div>
      </ClientWrapper>
    </main>
  )
}