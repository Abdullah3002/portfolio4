import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work,index)=>{
                    return <img key={index}  src={work.w_img} alt="" />

                })}

            </div>
<div className='show'>           <p>If you want to see <span className='live'>Live page</span> website than click on show more button..</p>
</div>
            <div className="mywork-showmore">
                <p><a href="https://abdullah3002.github.io/myprojects/">Show More</a></p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    );
};

export default MyWork;