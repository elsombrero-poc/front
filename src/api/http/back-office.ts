import createClient from "openapi-fetch";
import { paths } from "../bo-schema";

export const BackOfficeClient = createClient<paths>({
  baseUrl: process.env.BO_BASE_URL,
  headers: { 'Authorization': `Bearer ${process.env.BO_API_KEY}`, },
  next: {revalidate: 1, },
})