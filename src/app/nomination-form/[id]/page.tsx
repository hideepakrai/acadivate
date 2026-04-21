import NominationForm from '@/src/components/forms/Nomination/NominationForm'
import React from 'react'

const page = async ({params}: {params: Promise<{id: string}>}) => {
  const { id } = await params

  return (
  <>
  <NominationForm/>
  </>
  )
}

export default page