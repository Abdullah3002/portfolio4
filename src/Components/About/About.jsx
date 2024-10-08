import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/zubaer1.jpg";

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="zubaer1" src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            A highly skilled frontend developer with 1 year of experience, proficient in React.js, Firebase, MongoDB, and Next.js. I excel in creating dynamic, user-friendly web applications focused on performance and SEO optimization. Additionally, I have expertise in video and image creation, enhancing user experience through engaging multimedia content.{" "}
            </p>
            <p>
            I am dedicated to delivering high-quality solutions that meet client needs and contribute to business growth. My project experience showcases my ability to produce innovative and effective web applications. With a strong focus on client satisfaction, I strive to exceed expectations in every project I undertake.{" "}
            </p>
          </div>
          <div className="about-slills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javasript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTED COMPLETED</p>
        </div>
        
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
