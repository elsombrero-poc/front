import createClient from "openapi-fetch";
import { paths } from "../schema";

export const ApiClient = createClient<paths>({
  baseUrl: process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL,
  next: { revalidate: 1, }
})