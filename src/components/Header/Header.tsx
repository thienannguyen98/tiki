import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass, faUser, faBars, faLocationDot, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { IUser } from '../../interface/types'

const Header: React.FC = () => {

    return (
        <div className={styles.headerMain}>
            <div className={styles.headerRow}>
                <Link to={'/'}>
                    <img src={logo} />
                </Link>
                <div className={styles.searchBar}>
                    <input className={styles.searchInput} type="text" placeholder='Tìm sản phẩm, danh mục, hay thương hiệu mong muốn ...' />
                    <button className={styles.searchButton}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
                        <span >Tìm kiếm</span>
                    </button>
                </div>

                {/* {user.loginInfo.name */}
                {/* ? <Link to={"/user/edit"} className={styles.userInfo}> */}
                {/* <img src={user.avatar} alt="no img" className={styles.userIcon} /> */}
                {/* <p>{user.loginInfo.name}</p> */}
                {/* </Link> */}
                : <Link to={"/login"} className={styles.loginButton} >
                    <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
                    <p>Đăng nhập <br />Tài khoản</p>
                </Link>
                {/* } */}

                <div className={styles.cartButton}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>Giỏ hàng</span>
                    <p className={styles.cartCount}>0</p>
                </div>
            </div>
            <div className={styles.headerRow}>
                <div className={styles.category}>
                    <FontAwesomeIcon icon={faBars} className={styles.headerRowIcon}></FontAwesomeIcon>
                    <p>Danh mục sản phẩm</p>
                </div>
                <div className={styles.shipAddress}>
                    <FontAwesomeIcon icon={faLocationDot} className={styles.headerRowIcon}></FontAwesomeIcon>
                    <p>Bạn muốn giao hàng tới đâu</p>
                </div>
                <div className={styles.recentProduct}>
                    <FontAwesomeIcon icon={faCaretDown} className={styles.headerRowIcon}></FontAwesomeIcon>
                    <p>Sản phẩm bạn đã xem</p>
                </div>
                <p>Giao nhanh 24h và hôm sau</p>
                <p>Thực phẩm tươi sống</p>
                <p>Sản phẩm chính hiệu</p>
                <p>30 ngày đổi trả</p>
            </div>
        </div>
    )
}

export default Header