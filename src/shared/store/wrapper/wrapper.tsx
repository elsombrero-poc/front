'use client'
import { Provider, useDispatch } from "react-redux"
import { store } from ".."
import React, { useEffect } from "react"
import { Metadata } from "../../../api/types"
import { setMetadata } from "../slices/metadata"

interface WrapperProps {
  metadata: Metadata,
  children: React.ReactNode
}

const Wrapper = ({children, metadata}: WrapperProps) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if(metadata && dispatch) {
      dispatch(setMetadata(metadata))
    }
  }, [metadata, dispatch])
  return (
    <>
      {children}
    </>
  )
}

export const ClientWrapper = ({metadata, children}: WrapperProps) => {
  return (
    <Provider store={store}>
      <Wrapper metadata={metadata}>{children}</Wrapper>
    </Provider>
  )
}