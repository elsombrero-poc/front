import { MapCard } from "./Card/Card"
import { MapHeader } from "./Header/Header"

export const ShippingMap = () => {
  return (
    <div className="flex flex-col gap-5">
      <MapHeader />
      <MapCard />
    </div>
  )
}