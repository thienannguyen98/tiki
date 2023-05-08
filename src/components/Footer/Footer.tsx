import React from 'react'
import styles from './Footer.module.scss'
import gp from '../../assets/gp.png'
import pay1 from '../../assets/pay-1.png'
import pay2 from '../../assets/pay-2.png'
import deli from '../../assets/deliver.jpg'
import zalo from '../../assets/zalo.png'
import fb from '../../assets/fb.png'
import dl from '../../assets/dl.png'

const Footer: React.FC = () => {
    return (
        <div className={styles.contain}>
            <div className={styles.footColumn}>
                <h3>Hỗ trợ khách hàng</h3>
                <ul>
                    <li>Hotline: 1900-6035 (1000 đ/phút, 8-21h kể cả T&, CN)</li>
                    <li>Các câu hỏi thường gặp</li>
                    <li>Gửi yêu cầu hỗ trợ</li>
                    <li>Hướng dẫn đặt hàng</li>
                    <li>Phương thức vận chuyển</li>
                    <li>Chính sách đổi trả</li>
                    <li>Hướng dẫn trả góp</li>
                    <li>Chính sách hàng nhập khẩu</li>
                    <li>Hỗ trợ khách hàng: hotro@tiki.vn</li>
                    <li>Báo lỗi bảo mật: security@tiki.vn</li>
                </ul>
            </div>
            <div className={styles.footColumn}>
                <h3>Về tiki</h3>
                <ul>
                    <li>Giới thiệu tiki</li>
                    <li>Tuyển dụng</li>
                    <li>Chính sách bảo mật thanh toán</li>
                    <li>Chính sách bảo mật thông tin cá nhân</li>
                    <li>Chính sách giải quyết khiếu nại</li>
                    <li>Điều khoản sử dụng</li>
                    <li>Giới thiệu Tiki Xu</li>
                    <li>SEP - Mua sắm có lời</li>
                    <li>Tiếp thị liên kết cùng tiki</li>
                    <li>Bán hàng doanh nghiệp</li>
                    <li>Điều kiện vận chuyển</li>
                </ul>
            </div>
            <div className={styles.footColumn}>
                <h3>Hợp tác và liên kết</h3>
                <ul>
                    <li>Quy chế hoạt động sàn GDTMĐT</li>
                    <li>Bán hàng cùng tiki</li>
                </ul>
                <h3>Chứng nhận bởi</h3>
                <div className="">
                    <img src={gp} alt="img" style={{ width: '50%', marginTop: '-10px' }} />
                </div>
            </div>
            <div className={styles.footColumn}>
                <h3>Phương thức thanh toán</h3>
                <img src={pay1} alt="img" style={{ width: '20%', marginTop: '-10px', marginRight: '10px' }} />
                <img src={pay2} alt="img" style={{ width: '20%', marginTop: '-10px' }} />
                <h3>Dịch vụ giao hàng</h3>
                <img src={deli} alt="img" style={{ width: '40%', marginTop: '-10px' }} />
            </div>
            <div className={styles.footColumn}>
                <h3>Kết nối với chúng tôi</h3>
                <img src={zalo} alt="img" style={{ width: '20%', marginTop: '-10px', marginRight: '10px' }} />
                <img src={fb} alt="img" style={{ width: '20%', marginTop: '-10px', marginRight: '10px' }} />
                <h3>Tải ứng dụng trên điện thoại</h3>
                <img src={dl} alt="img" style={{ width: '40%', marginTop: '-10px' }} />
            </div>
        </div>
    )
}

export default Footer