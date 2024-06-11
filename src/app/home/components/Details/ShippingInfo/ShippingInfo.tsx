import { ShippingSteps } from "./Steps/Steps"
import { ShippingInfoHeader } from "./Header/Header"
import { ShippingProduct } from "./Product/Product"

export const ShippingInfo = () => {
  return (
    <div className="flex flex-col gap-5">
      <ShippingInfoHeader />
      <ShippingProduct />
      <ShippingSteps />
    </div>
  )
}