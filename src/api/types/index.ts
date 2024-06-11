
export interface ApiResponse<T = unknown, E = unknown> {
  data: T,
  error: E,
  response: Response,
}

export interface Metadata {
  [key: string]: string
}