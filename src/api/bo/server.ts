import { components } from "../bo-schema"
import { BackOfficeClient } from "../http/back-office"
import { ApiResponse, Metadata } from "../types"
import { WordingFactory } from "./helpers"

const getWordings = async (page: string) => {
  try{
    const { data }: ApiResponse<components['schemas']['WordingListResponse']> 
    = await BackOfficeClient
    .GET('/wordings',
      { params: { query: { filters: { 'page': page as never } } },
    }) as any

    const metadata = data?.data?.reduce((meta: unknown, current) => {
      if(page === current.attributes?.page) return { ...meta as Metadata, [current.attributes.token as string]: current.attributes.description}
      return meta
    }, {} as Metadata)
  
    return metadata as Metadata
  }catch(e) { return {} }
}

export const FetchMetadata = async (page: string) => {
  const metadata = await getWordings(page)
  const wordings = WordingFactory(metadata)
  return { metadata, wordings }
}
