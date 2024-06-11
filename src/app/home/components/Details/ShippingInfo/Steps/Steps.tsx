import { Card } from "../../../../../../ui/components/Card/Card"
import { Stepper } from "../../../../../../ui/components/Stepper/Stepper"

export const ShippingSteps = () => {
  return (
    <Card radius="xl" className="bg-white w-full p-12">
      <Stepper
        steps={[
          {
            icon: <i className="fa fa-home"></i>,
            title: 'Sent by the seller',
            subtitle: 'May 10, 2024 ~ 10.00 AM',
          },
          {
            icon: <i className="fa fa-truck"></i>,
            title: 'Delivering',
          },
          {
            icon: <i className="fa-solid fa-house-flag"></i>,
            title: 'Warehouse',
            subtitle: 'August 30, 2024 ~ 6.00 AM'
          }
          ,
          {
            icon: <i className="fa-solid fa-location-dot"></i>,
            title: 'Sent by the seller',
            subtitle: 'August 31, 2024 ~ 7.00 PM',
          },
          {
            icon: <i className="fa-solid fa-house-circle-check"></i>,
            title: 'Sent by the seller',
          }
        ]}
        step={1}
      />
  </Card>
  )
}