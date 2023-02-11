import MainLayout from '../../layouts/main';
import './index.css';
import AchievementsPageData from '../../data/AchievementsPageData';
import AchievementsItem from '../../components/achievementsItem';

const AchievementsPage = () => {
    return (
        <MainLayout>
            <div className='achievements-container'>
                <div className='achievements-container_title'>
                    <h1 className='achievements-title_text'>Достижения</h1>
                </div>
                <ul className='achievements-container-items'>
                    {AchievementsPageData.map((item) => {
                        return (
                            <AchievementsItem {...item} key={item.name} />
                        )
                    })}
                </ul>
            </div>
        </MainLayout >
    );
};

export default AchievementsPage;
