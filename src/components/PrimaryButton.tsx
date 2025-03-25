import React from 'react'

function PrimaryButton({ text, onClick }: { text: string, onClick?: () => void }) {
  return (
    <button className='primary-button' onClick={onClick}>{text}</button>
  )
}

export default PrimaryButton