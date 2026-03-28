"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/src/hook/store'
import LoginHome from '@/src/components/auth/login/LoginHome'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const {isAuthenticated}= useSelector((state:RootState)=>state.auth)
    const router= useRouter()
    useEffect(()=>{
        if(isAuthenticated){
            router.push("/dashboard")
        }
    },[isAuthenticated, router])
  return (
   !isAuthenticated && <LoginHome 
      isadmin={true}
   />
  )
}

export default page
