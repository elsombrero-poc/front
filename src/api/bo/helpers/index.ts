import { Metadata } from "../../types"

export const WordingFactory = (metadata: Metadata) => {
  return (token: string, fallback: string) => metadata[token] || fallback
}