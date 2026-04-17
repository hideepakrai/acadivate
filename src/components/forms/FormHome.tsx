"use client"
import React, { useState } from 'react'
import { Button } from '../ui/Button'
import NominationForm from '../NominationForm'
import { useRouter } from 'next/navigation'

const FormHome = () => {
  const [isNominationForm, setIsNominationForm] = useState(false)
  const router = useRouter()
    const handleAddNominationForm = () => {
        router.push('/nomination-form1')
    }
    const handleCloseNominationForm = () => {
        router.push('/dashboard/forms')
    }
  return (
    <>
    
    <Button className='w-full'
    
    onClick={handleAddNominationForm}
    >Nomination Form</Button>

   
    </>
  )
}

export default FormHome