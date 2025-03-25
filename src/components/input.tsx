import React from 'react'
import MagnifyGlassIcon from './Icons/magnify-glass'

function Input({ placeholder, value, onChange }: { placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
      <div className="input-container">
        <input 
          className="input" 
          placeholder={placeholder} 
          value={value}
          onChange={onChange}
        />
        <MagnifyGlassIcon className='icon' />
      </div>
    );
  }

export default Input