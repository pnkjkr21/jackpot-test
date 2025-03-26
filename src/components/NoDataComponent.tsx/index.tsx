import React from 'react'
import Image from 'next/image'
import styles from './no-data-component.module.css'

const NoDataComponent = ({ text = "No Games Found For this Filter" }: { text?: string }) => {
  return (
    <div className={styles.noDataContainer}>
        {text}
    </div>
  )
}

export default NoDataComponent