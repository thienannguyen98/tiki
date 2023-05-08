import React from 'react'
import DealItem from './Item/Item'
import styles from './Hotdeal.module.scss'

const Hotdeal: React.FC = () => {
    return (
        <div className={styles.contain}>
            <DealItem />
            <DealItem />
            <DealItem />
            <DealItem />
        </div>
    )
}

export default Hotdeal