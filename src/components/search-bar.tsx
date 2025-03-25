import React from 'react'
import Input from './input'

function SearchBar({ placeholder = '', value = '', onChange = () => {} }: { placeholder?: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className='search-bar-container'>
        <Input placeholder={placeholder} value={value} onChange={onChange}  />
    </div>
  )
}

export default SearchBar