import React, { useEffect, useState } from 'react'
import styles from './EditProfile.module.scss'
import { useImmer } from 'use-immer'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { countries } from '../../interface/types'
import Country from './Country/Country'
import dAvatar from '../../assets/d-avatar.png'
import { IUserInfo, IUser } from '../../interface/types'


const EditProfile: React.FC = () => {

    const [countries, setCountries] = useState<countries[]>([{
        code: '',
        currencyCodes: [''],
        name: '',
        wikiDataId: '',
    }])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries',
            headers: {
                'X-RapidAPI-Key': '015be26226msh24079e41ba03068p152f3djsn49cf79862ddb',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setCountries(response.data.data)
        }).catch(function (error) {
            console.error(error)
        });
    }, [])

    const schema = yup.object({
        fullName: yup.string().required("User name cannot be empty"),
        nickName: yup.string().required("Password cannot be empty"),
        avatar: yup.string(),
        sex: yup.string(),
        nation: yup.string(),
    })

    const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm<IUserInfo>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IUserInfo> = (data: IUserInfo) => {

    }

    return (
        <div className={styles.contain}><h1>Thông tin tài khoản</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.left}>
                    <h2>Thông tin cá nhân</h2>
                    <div className={styles.name}>
                        <div className={styles.upload}>
                            <img src={dAvatar} alt="img NA" />
                            <input type="file" {...register('avatar')} />
                        </div>
                        <div className={styles.names}>
                            <div className={styles.fullName}>
                                <label htmlFor="fullName">Họ & Tên</label>
                                <input type="text" {...register("fullName")} placeholder={"Họ và tên"} />
                            </div>
                            <div className={styles.nickName}>
                                <label htmlFor="nickName">Nickname</label>
                                <input type="text" {...register("nickName")} placeholder={"Thêm nickname"} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.dob}>

                    </div>
                    <div className={styles.sex}>
                        <span>Giới tính</span>
                        <div className={styles.select}>
                            <input type="radio" id="nam" value="Nam" {...register("sex")} />
                            <label htmlFor="nam">Nam</label>
                            <input type="radio" id="nu" value="Nữ" {...register("sex")} />
                            <label htmlFor="nu">Nữ</label>
                            <input type="radio" id="other" value="Khác" {...register("sex")} />
                            <label htmlFor="other">Khác</label>
                        </div>
                    </div>
                    <div className={styles.nation}>
                        <span>Quốc tịch</span>
                        <select {...register("nation")}>
                            {countries.map(country => <Country
                                key={country.code}
                                code={country.code}
                                name={country.name} />)}

                        </select>
                    </div >
                    <button type='submit'>Lưu thay đổi</button>
                </div >
                <div className={styles.right}>
                    <h2>Số điện thoại và Email</h2>
                    <div className={styles.contactInfo}>
                        <div className={styles.phoneNo}>
                            <p>Số điện thoại<br />0398445433</p>
                            <button>Cập nhật</button>
                        </div>
                        <div className={styles.mail}>
                            <p>Đại chỉ email<br />annguyen090198@gmail.com</p>
                            <button>Cập nhật</button>
                        </div>
                    </div>
                    <h2>Bảo mật</h2>
                    <div className={styles.security}>
                        <div className={styles.changePassword}>
                            <p>Đổi mật khẩu</p>
                            <button>Cập nhật</button>
                        </div>
                        <div className={styles.pin}>
                            <p>Thiết lập mã PIN</p>
                            <button>Thiết lập</button>
                        </div>
                    </div>
                    <h2>Liên kết mạng xã hội</h2>
                    <div className={styles.social}>
                        <div className={styles.fb}>
                            <p>Face book</p>
                            <button>Liên kết</button>
                        </div>
                        <div className={styles.gg}>
                            <p>Google</p>
                            <button>Liên kết</button>
                        </div>
                    </div>
                </div>
            </form >
        </div>
    )
}

export default EditProfile