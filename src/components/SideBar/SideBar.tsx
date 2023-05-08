import React from 'react'
import styles from './SideBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as icons from '../icon'
library.add(icons);

const SideBar: React.FC = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.productList}>
                <li>
                    <FontAwesomeIcon icon={icons.faMobileScreen} className={styles.sideIcon} />
                    Điện Thoại - Máy Tính Bảng
                </li>
                <li>
                    <FontAwesomeIcon icon={icons.faTv} className={styles.sideIcon} />
                    Điện Tử - Điện Lạnh
                </li>
                <li>
                    <FontAwesomeIcon icon={icons.faHeadphones} className={styles.sideIcon} />
                    Phụ Kiện - Thiết Bị Số
                </li>
                <li>
                    <FontAwesomeIcon icon={icons.faLaptop} className={styles.sideIcon} />
                    Laptop - Thiết Bị IT
                </li>
                <li>
                    <FontAwesomeIcon icon={icons.faCamera} className={styles.sideIcon} />
                    Máy Ảnh - Quay Phim
                </li>
                <li>
                    <FontAwesomeIcon icon={icons.faLightbulb} className={styles.sideIcon} />
                    Điện Gia Dụng
                </li>
                <li>
                    <FontAwesomeIcon icon={icons.faHouse} className={styles.sideIcon} />
                    Nhà Cửa Đời Sống
                </li>
                <li>
                    <FontAwesomeIcon icon={icons.faGamepad} className={styles.sideIcon} />
                    Đồ Chơi, Mẹ & Bé
                </li>
                <li>
                    <FontAwesomeIcon icon={icons.faBasketball} className={styles.sideIcon} />
                    Thể Thao - Dã Ngoại
                </li>
                <li>
                    <FontAwesomeIcon icon={icons.faMotorcycle} className={styles.sideIcon} />
                    Xe Máy, Ô Tô, Xe Đạp
                </li>
            </ul>
        </div>
    )
}

export default SideBar