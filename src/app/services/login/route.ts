import { NextRequest, NextResponse } from "next/server"
import { ApiClient } from "../../../api/http/api"
import { components } from "../../../api/schema"
import { ApiResponse } from "../../../api/types"
import { cookies } from "next/headers"

export async function POST(req: NextRequest) {
  const cookie = cookies()
  const body = await req.formData()
  const url = req.nextUrl.clone()

  try {
    const { data }: ApiResponse<components['schemas']['UserTokenDto']> = await ApiClient.POST('/users/login', {
      body: {
        email: body.get('email') as string,
        password: body.get('password') as string,
      }
    }) as any
    cookie.set('API_TOKEN', data.token)
    url.pathname = '/'  
  } catch(e) {
    url.pathname = '/login'
    url.searchParams.set('error', 'true') 
  }
  
  return NextResponse.redirect(url)
}
