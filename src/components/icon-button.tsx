import React, { ReactElement } from 'react'

function IconButton({ icon, onClick }: { icon: ReactElement, onClick?: () => void }) {
  return (
    <button className='icon-button' onClick={onClick}>
      {icon}
    </button>
  )
}

export default IconButton