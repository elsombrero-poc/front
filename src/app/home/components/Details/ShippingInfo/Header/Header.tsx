import { Badge } from "../../../../../../ui/components/Badge/Badge"
import { Button } from "../../../../../../ui/components/Button/Button"

export const ShippingInfoHeader = () => {
  return (
    <div className="title flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Badge radius="xl" size="lg">
          <i className="fa fa-box-archive"></i>
        </Badge>
        <strong className="text-2xl">
          Shipping info
        </strong>
      </div>
      <Button theme="danger" size="md" variant="light" radius="xl">
        <i className="fa fa-pencil"></i>
        &nbsp;
        Manage shipping
      </Button>
    </div>
  )
}