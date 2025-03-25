import React from 'react'
import Image from 'next/image'
import styles from './no-data-component.module.css'

const NoDataComponent = () => {
  return (
    <div className={styles.noDataContainer}>
        No Games Found For this Filter
    </div>
  )
}

export default NoDataComponent