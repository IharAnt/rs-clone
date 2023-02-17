import MainLayout from '../../layouts/main';
import './index.css';
import AchievementsItem from '../../components/achievementsItem';
import { IAchievement } from '../../types/interfaces/IAchievement';
import { useEffect, useState } from 'react';
import RatingService from '../../services/RatingService';

const AchievementsPage = () => {

    const [achievementsData, setAchievementsData] = useState([] as IAchievement[]);

    useEffect((() => {
        const getAchievementsData = async () => {
            const data = await RatingService.getAchivements();
            setAchievementsData(data);
        }
        getAchievementsData();
    }), [])

    return (
        <MainLayout>
            <div className='achievements-container'>
                <div className='achievements-container_title'>
                    <h1 className='achievements-title_text'>Достижения</h1>
                </div>
                <ul className='achievements-container-items'>
                    {achievementsData.map((item) => {
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
