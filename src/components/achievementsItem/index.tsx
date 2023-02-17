import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store';
import { IAchievement } from '../../types/interfaces/IAchievement';
import ImgAchievementItem from '../imgAchievementItem';
import './index.css';

const AchievementsItem = (data: IAchievement) => {

    const [scoreItem, setScoreItem] = useState(0);
    const [widthImg, setWidthImg] = useState(0);
    const profileAchievement = useAppSelector(state => state.appState.profile.achievements);

    useEffect((() => {
        if (profileAchievement) {
            profileAchievement.forEach((item) => {
                if (item.type === data.type) {
                    const actualWidth = (item.maxPoints / data.maxPoints) * 100;
                    setWidthImg(Math.min(100, actualWidth));
                    setScoreItem(item.maxPoints);
                }
            })
        }
    }), [profileAchievement, data])

    return (
        <li className='achievements-container_item'>
            <ImgAchievementItem width='100' img={data.img} control={widthImg} />
            <div>
                <p className='achievements-item_title'>
                    Достижение: {data.name}
                    <span className={widthImg === 100 ? 'achievements-item_done' : 'hidden'}>✓</span>
                </p>
                <p className='achievements-item_description'>{data.description}</p>
                <p className='achievements-item_score'>Для получения этого достижения необходимо набрать <span className='text-item-orange'>{data.maxPoints}</span> баллов.</p>
                {scoreItem === 0 && <p className='achievements-item_score'>У вас нету баллов за это достижение.</p>}
                {scoreItem > 0 && <p className='achievements-item_score'>Вы набрали: <span className='text-item-orange'>{scoreItem}</span> баллов.</p>}
            </div>
        </li>
    );
};

export default AchievementsItem;
