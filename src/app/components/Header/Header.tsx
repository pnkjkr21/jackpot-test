'use client'
import * as React from 'react';
import Image from 'next/image';
import logo from "@/components/jackpot-logo.png"
import JackpotOriginalIcon from '@/components/Icons/jackpot-original-icon';
import PrimaryButton from '@/components/PrimaryButton';
import IconButton from '@/components/icon-button';
import MagnifyGlassIcon from '@/components/Icons/magnify-glass';
import UserOutline from '@/components/Icons/user-outline';
import SecondaryButton from '@/components/secondary-button';
import { useRouter } from 'next/navigation';
import styles from './header.module.css';

export interface IAppProps {
}

const Header = (props: IAppProps) => {
    return (
        <header>
            <div className={styles.logoContainer}>
                <Image 
                    src={logo} 
                    alt="Desktop logo" 
                    width="141" 
                    height="26" 
                    className={styles.desktopLogo}
                />
                <div className={styles.mobileLogo}>
                    <JackpotOriginalIcon />
                </div>
            </div>
            <div className={styles.actionItemsContainer}>
                <IconButton icon={<MagnifyGlassIcon fill='#3E374E' />} />
                <IconButton icon={<UserOutline />} />
                <SecondaryButton text='login' />
                <PrimaryButton text='Register' />
            </div>
        </header>
    );
}

export default Header
