import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store';
import { IAchievement } from '../../types/interfaces/IAchievement';
import ImgAchievementItem from '../imgAchievementItem';
import './index.css';

const ItemLevelAchievements = (data: IAchievement) => {

    const [widthImg, setWidthImg] = useState(0);
    const [actualPoint, setActualPoint] = useState(0);
    const profileAchievement = useAppSelector(state => state.appState.profile.experiences);

    useEffect((() => {
        if (profileAchievement) {
            profileAchievement.forEach((item) => {
                if (item.type === data.type) {
                    setActualPoint(item.value);
                    const actualWidth = (item.value / data.maxPoints) * 100;
                    setWidthImg(Math.min(100, actualWidth));
                }
            })
        }
    }), [profileAchievement, data])

    return (
        <li className='achievements-level_item'>
            <p className='achievements-level_text'>{data.name}: {actualPoint}/{data.maxPoints}</p>
            <ImgAchievementItem width='65' img={data.img} control={widthImg} />
        </li>
    );
};

export default ItemLevelAchievements;
