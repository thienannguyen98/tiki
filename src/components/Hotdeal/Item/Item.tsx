import React from 'react'
import styles from './Item.module.scss'
import deal from '../../../assets/intro.png'

const DealItem: React.FC = () => {
    return (
        <div className={styles.contain}>
            <img src={deal} />
        </div>
    )
}

export default DealItem