import React from 'react'
import styles from './carousel.module.css'
import RightArrow from '../Icons/right-arrow'
import LeftArrow from '../Icons/left-arrow'

function Header({ handleScrollLeft, handleScrollRight, isLeftButtonDisabled, isRightButtonDisabled, title, Icon }: { 
  handleScrollLeft: () => void, 
  handleScrollRight: () => void, 
  isLeftButtonDisabled: boolean, 
  isRightButtonDisabled: boolean, 
  title: string, 
  Icon?: React.ComponentType 
}) {
  return (
    <div className={styles.carouselHeader}>
        <div className={styles.carouselHeaderTitleContainer}>
            {Icon && <Icon />}
            <div className={styles.carouselHeaderTitle}>{title}</div>
        </div>
        <div className={styles.carouselHeaderActionContainer}>
            <button className={styles.carouselHeaderButton}>View All</button>
            <div className={styles.carouselHeaderButtonContainer}>
                <button className={styles.carouselHeaderButton} onClick={handleScrollLeft} disabled={isLeftButtonDisabled}>
                    <LeftArrow color="#EAE6F5" />
                </button>
                <button className={styles.carouselHeaderButton} onClick={handleScrollRight} disabled={isRightButtonDisabled}>
                    <RightArrow color="#EAE6F5" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header