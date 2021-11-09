import React from 'react'
import './footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
    return (
        <div className="footer">
            <div className="left">
                <h2 className="logo">BRAND.</h2>
                <p className="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti qui facere eligendi quidem!
                </p>
                <div className="socialContainer">
                    <div className="socialIcon">
                        <FacebookIcon />
                    </div>
                    <div className="socialIcon">
                        <InstagramIcon />
                    </div>
                    <div className="socialIcon">
                        <TwitterIcon />
                    </div>
                </div>
            </div>
            <div className="center">
                <h3 className="title">Useful Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Man Fashion</li>
                    <li>Woman Fashion</li>
                    <li>Accessories</li>
                    <li>My Account</li>
                    <li>Order Tracking</li>
                    <li>Wishlist</li>
                    <li>Wishlist</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className="right">
                <h3 className="title">Contact</h3>
                <div className="contactItem">
                    <RoomIcon style={{ marginRight: "10px" }} /> 999 Brand Path , Stockholm 99999
                </div>
                <div className="contactItem">
                    <PhoneEnabledIcon style={{ marginRight: "10px" }} /> +90 999 999 99 99
                </div>
                <div className="contactItem">
                    <MailOutlineIcon style={{ marginRight: "10px" }} /> contact@brand.com
                </div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
            </div>
        </div>
    )
}

export default Footer
