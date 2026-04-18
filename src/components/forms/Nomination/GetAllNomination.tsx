"use client"
import { AppDispatch } from '@/src/hook/store'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

const GetAllNomination = () => {

    const dispatch= useDispatch<AppDispatch>()
    const isApiCall= useRef<boolean>(false)
  return (
   null
  )
}

export default GetAllNomination