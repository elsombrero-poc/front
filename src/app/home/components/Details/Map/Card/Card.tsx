import Image from "next/image"
import { Card } from "../../../../../../ui/components/Card/Card"

export const MapCard = () => {
  return (
    <Card radius="xl" className="bg-white w-full h-[350px] overflow-hidden" style={{padding: '0'}}>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover object-center"
        src="/images/mock/map.png"
        alt="map"
      />
    </Card>
  )
}