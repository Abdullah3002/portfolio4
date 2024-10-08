import './Hero.css'
import portfolio_img from '../../assets/profile-pic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img className='profile' src={portfolio_img} alt="" />
            <h1> <span >I'am Abdullah Al Zubaer,</span> frontend developer based in Bangladesh</h1>
            <p>I'm a frontend developer with a year of experience in React.js, Firebase, MongoDB, and Next.js, dedicated to creating high-performance web applications and engaging multimedia content.</p>
            <div className="hero-action">
                <div className="hero-content"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me </AnchorLink> </div>
                <div className="hero-resume"> <a href="https://ibb.co.com/x1vWTkN"> My resume </a></div>
            </div>
        </div>
    );
};

export default Hero;