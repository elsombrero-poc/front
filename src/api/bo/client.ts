'use client'
import { useEffect, useState } from "react";
import { Metadata } from "../types";
import { WordingFactory } from "./helpers";

export const useBackOffice = (metadata: Metadata) => {
  const wordings = WordingFactory(metadata)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(metadata) setLoading(false)
  }, [metadata])

  return { wordings, loading }
}
