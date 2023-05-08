import React from 'react'
import Hotdeal from '../Hotdeal/Hotdeal'
import SideBar from '../SideBar/SideBar'
import Slider from '../Slider/Slider'
import styles from './Content.module.scss'

const Content: React.FC = () => {
    return (
        <div className={styles.contain}>
            <SideBar />
            <div className={styles.slideSection}>
                <Slider />
                <Hotdeal />
            </div>
        </div>
    )
}

export default Content