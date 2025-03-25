import React from 'react'

function PrimaryButton({ text }: { text: string }) {
  return (
    <button className='primary-button'>{text}</button>
  )
}

export default PrimaryButton