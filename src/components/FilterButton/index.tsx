import React from 'react'
import styles from './filter-button.module.css'
function FilterButton({ text, onClick, isActive = false }: { text: string, onClick: () => void, isActive?: boolean }) {
  return (
    <button className={`${isActive ? styles.active : styles.filterButton}`} onClick={onClick}>{text}</button>
  )
}

export default FilterButton