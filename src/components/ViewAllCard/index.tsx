import React from 'react'
import CrossArrowIcons from '../Icons/cross-arrow.icons'
import styles from './view-all-card.module.css'

const ViewAllCard = () => {
  return (
    <div className={styles.viewAllCard}>
        <CrossArrowIcons width={36} height={36} color="#7658ED" />
        <div>View All</div>
    </div>
  )
}

export default ViewAllCard