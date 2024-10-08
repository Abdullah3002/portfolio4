import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {

    
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img className='logo' src={logo} alt="" />
                        <p>I am a fontend developer from Bangladesh , with 1 years of experience</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe"   > <a href="https://www.instagram.com/abdullahalzubaerofficial/">Subscribe</a></div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
               <p className='footer-bottom-left'> @2024 codewithzubaer. All rights reserved.</p>
               <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
               </div>
            </div>
        </div>
    );
};

export default Footer;