import NominationForm from '@/src/components/forms/Nomination/NominationForm'
import React from 'react'

const page = ({params}: {params: {id: string}}) => {
 const id = params.id
  console.log("page id ", id)
  return (
  <>
  <NominationForm/>
  </>
  )
}

export default page