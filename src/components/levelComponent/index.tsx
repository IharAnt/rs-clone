import profileIcoDefault from './../../assets/img/profileIcoDefault.png';
import xpIco from './../../assets/img/xpIco.png';
import './index.css';

const LevelComponent = () => {

    return (
        <div className='level-container'>
            <img className='level-container_img' src={profileIcoDefault} alt="profile ico" />
            <div className='level-container_xp'>
                <div className='experience_line'></div>
                <div className='experience_next-level'>
                    <img className='next-level_ico' src={xpIco} alt="xp ico" />
                    <p className='next-level_text'>350</p>
                    <p className='next-level_text'>до след. уровня</p>
                </div>
            </div>
            <div className='level-container_achievements'>

            </div>
        </div>

    );
};

export default LevelComponent;
