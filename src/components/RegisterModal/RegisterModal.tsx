import React, { useState, useRef } from 'react'
import { useImmer } from 'use-immer'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import styles from './RegisterModal.module.scss'
import { IRegisterInput, IUser } from '../../interface/types'

const RegisterModal: React.FC = () => {
    const userRef = useRef<IUser>({
        id: '',
        loginInfo: {
            name: '',
            password: '',
        },
        name: {
            fullName: '',
            nickName: '',
        },
        avatar: '',
        phone: '',
        address: {
            street: '',
            number: '',
        },
        email: '',
        sex: '',
        nation: '',
    })

    let navigate = useNavigate()
    const schema = yup.object({
        username: yup.string().required("User name cannot be empty"),
        password: yup.string().required("Password cannot be empty"),
        confirmPassword: yup
            .string().required("Confirm password cannot be empty")
            .oneOf([yup.ref("password")], "Password must be matched"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<IRegisterInput>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IRegisterInput> = (data: IRegisterInput) => {
        userRef.current.loginInfo.name = data.username
        userRef.current.loginInfo.password = data.password
        const getUser = localStorage.getItem('userStore')
        const parseUser = getUser ? JSON.parse(getUser) : []
        const checkUser = parseUser.filter((user: IUser) => user.loginInfo.name === data.username)
        if (checkUser.length > 0) {
            alert("User name existed - Please try again")
        }
        else {
            parseUser.push(userRef.current)
            localStorage.setItem('userStore', JSON.stringify(parseUser))
            navigate('/login')
        }
    }

    return (
        <div className={styles.contain}>
            <form className={styles.regisForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formRow}>
                    <h1>Tạo tài khoản</h1>
                    <Link to={'/login'} className={styles.loginButton}>
                        <button>Log in</button>
                    </Link>
                </div>
                <div className={styles.inputGroup}>
                    <input type="text" placeholder='User name' {...register('username', { required: true })} />
                    <p className={styles.errorMessage}>{errors.username?.message}</p>
                    <input type="password" placeholder='Password'{...register('password', { required: true })} />
                    <p className={styles.errorMessage}>{errors.password?.message}</p>
                    <input type="password" placeholder='Confirm Password'{...register('confirmPassword', { required: true })} />
                    <p className={styles.errorMessage}>{errors.confirmPassword?.message}</p>
                </div>
                <p className={styles.condition}>Bằng việc tiếp tục, bạn đã chấp nhận điều khoản sử dụng</p>
                <button type='submit' className={styles.regisButton}> Đăng kí</button>
            </form>
        </div>
    )
}

export default RegisterModal