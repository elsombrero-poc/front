import _ from "lodash"
import { useBackOffice } from "../../../../../api/bo/client"
import { Metadata } from "../../../../../api/types"

export const FormText = ({metadata}: {metadata: Metadata}) => {
  const { wordings } = useBackOffice(metadata)

  return  (
    <div>
      <h1 className="text-4xl font-bold">
        {wordings('form.title.text-1', 'Title 1')}
      </h1>
      <p className="text-slate-400 text-sm">
        {wordings('form.subtitle.text-1', 'Subtitle 1')}
      </p>
    </div>
  )
}