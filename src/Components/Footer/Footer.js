import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className={styles.footer}>
            Copyright - {year} - BobiPlunk
        </div>
    )
}