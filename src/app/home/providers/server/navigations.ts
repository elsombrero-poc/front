import { components } from "../../../../api/bo-schema"
import { BackOfficeClient } from "../../../../api/http/back-office"
import { ApiResponse } from "../../../../api/types"

export const NavigationData = async () => {
  try{ 
    const { data }: ApiResponse<components['schemas']['NavigationListResponse']> 
    = await BackOfficeClient.GET('/navigations') as any
    return data.data
  } catch(e) { return [] }
}