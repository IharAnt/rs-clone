import { useEffect } from 'react';
import RatingService from '../../services/RatingService';
import { useAppDispatch, useAppSelector } from '../../store';
import { achievementsChange } from '../../store/appStore/sliceApp/slice';
import ItemLevelAchievements from '../itemLevelAchievements';
import './index.css';

const AchievementsLevelComponent = () => {

    const dispatch = useAppDispatch();
    const { achievements } = useAppSelector(state => state.appState)

    useEffect((() => {
        const funcGetAchievements = async () => {
            const achievements = await RatingService.getAchivements();
            dispatch(achievementsChange(achievements));
        }
        funcGetAchievements();
    }), [dispatch])

    return (
        <ul className='achievements-container_level'>
            {achievements.map((item) => {
                return (
                    <ItemLevelAchievements {...item} key={item.id} />
                )
            })}
        </ul>
    );
};

export default AchievementsLevelComponent;
