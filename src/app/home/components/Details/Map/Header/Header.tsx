import { Badge } from "../../../../../../ui/components/Badge/Badge"
import { Button } from "../../../../../../ui/components/Button/Button"

export const MapHeader = () => {
  return (
    <div className="title flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Badge radius="xl" size="lg">
          <i className="fa fa-map"></i>
        </Badge>
        <strong className="text-2xl">
          Track on the map
        </strong>
      </div>
      <Button theme="danger" size="md" variant="light" radius="xl">
        Open full map
      </Button>
    </div>
  )
}