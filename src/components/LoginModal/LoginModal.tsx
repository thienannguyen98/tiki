import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginModal.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import tiki from '../../assets/tiki-login-i.png'
import { IUser, loginInput } from '../../interface/types'

const LoginModal: React.FC = () => {
    let navigate = useNavigate()

    const schema = yup.object({
        username: yup.string().required("Username cannot be empty"),
        password: yup.string().required("Password cannot be empty")
    })

    const { register, handleSubmit, reset, formState, formState: { errors } } = useForm<loginInput>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<loginInput> = (data: loginInput) => {
        const getUser = localStorage.getItem('userStore')
        const parseUser = getUser ? JSON.parse(getUser) : []
        const checkUser = parseUser.filter((user: IUser) => user.loginInfo.name === data.username && user.loginInfo.password === data.password)
        if (checkUser.length === 0) {
            alert("Account not existed - Please try again")
        }
        else {
            alert("Login successfully")





            navigate("/")
        }

    }
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <Link to={'/'} >
                    <div className={styles.closeButton}>
                        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </div>
                </Link>
                <div className={styles.leftSection}>
                    <div className={styles.greet}>
                        <h1>Xin chào,</h1>
                        <p>Đăng nhập hoặc tạo tài khoản</p>
                    </div>
                    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                        <input className={styles.username} placeholder='Username' {...register("username", { required: true })} />
                        <p className={styles.errorMessage}>{errors.username?.message}</p>
                        <input type='password' className={styles.password} placeholder='Password' {...register("password", { required: true })} />
                        <p className={styles.errorMessage}>{errors.password?.message}</p>
                        <button className={styles.loginButton} type='submit'>Đăng nhập</button>
                    </form>
                    <div className={styles.register}>
                        <p style={{ display: 'inline-block' }}>Chưa có tài khoản?</p>
                        <Link to={'/register'} className={styles.registerButton} ><button>Đăng kí</button></Link>
                    </div>
                    <p className={styles.condition}>Bằng việc tiếp tục, bạn đã chấp nhận điều khoản sử dụng</p>
                </div>
                <div className={styles.rightSection}>
                    <img src={tiki} alt="img not avilable" />
                    <div className={styles.loginText}>
                        <h3>Mua sắm tại Tiki</h3>
                        <p>Siêu ưu đãi mỗi ngày</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LoginModal