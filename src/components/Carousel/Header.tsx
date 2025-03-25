import React from 'react'
import styles from './carousel.module.css'
import RightArrow from '../Icons/right-arrow'
import LeftArrow from '../Icons/left-arrow'
import { usePathname, useRouter } from 'next/navigation'

function Header({ handleScrollLeft, handleScrollRight, isLeftButtonDisabled, isRightButtonDisabled, title, Icon, id }: { 
  handleScrollLeft: () => void, 
  handleScrollRight: () => void, 
  isLeftButtonDisabled: boolean, 
  isRightButtonDisabled: boolean, 
  title: string, 
  id: string
  Icon?: React.ComponentType 
}) {
    const router = useRouter()
    const pathname = usePathname()
    
    const viewAll = () => {
        router.push(`${pathname}?category=${id}`)
    }
  return (
    <div className={styles.carouselHeader}>
        <div className={styles.carouselHeaderTitleContainer} onClick={viewAll}>
            {Icon && <Icon />}
            <div className={styles.carouselHeaderTitle}>{title}</div>
        </div>
        <div className={styles.carouselHeaderActionContainer}>
            <button className={styles.carouselHeaderButton} onClick={viewAll}>View All</button>
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