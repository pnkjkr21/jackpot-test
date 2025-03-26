import React from 'react'

function SecondaryButton({ text = "Login", onClick = () => {} } : { text?: string, onClick?: () => void }) {
  return (
    <button className='login-button' onClick={onClick}>{text}</button>
  )
}

export default SecondaryButton