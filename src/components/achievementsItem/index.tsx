import { useEffect, useState } from 'react';
import { IAchievementsPageData } from '../../pages/achievements/types/types';
import TaskTypeEnum from '../../types/enums/TaskTypeEnum';
import './index.css';

const AchievementsItem = (data: IAchievementsPageData) => {


    const [scoreItem, setScoreItem] = useState(0);
    const [widthImg, setWidthImg] = useState(0);

    const profileAchievements = [
        {
            type: TaskTypeEnum.Power,
            id: 'sdf5sd4af6sd54f',
            maxPoints: 300,
        },
        {
            type: TaskTypeEnum.Learner,
            id: 'sdf5sd4af6sd54f',
            maxPoints: 100,
        },
        {
            type: TaskTypeEnum.Intelligence,
            id: 'sdf5sd4af6sd54f',
            maxPoints: 500,
        },
        {
            type: TaskTypeEnum.Sleep,
            id: 'sdf5sd4af6sd54f',
            maxPoints: 2500,
        },
    ]

    useEffect((() => {
        profileAchievements.map((item) => {
            if (item.type === data.type) {
                const actualWidth = (item.maxPoints / data.score) * 100;
                setWidthImg(Math.min(100, actualWidth));
                setScoreItem(item.maxPoints);
            }
        })
    }), [profileAchievements])

    return (
        <li className='achievements-container_item'>
            <img
                className='achievements-item_ico_dissable'
                src={data.img}
                alt={`ico_${data.name}`} />
            <img
                style={{
                    width: `${widthImg}px`,
                }}
                className='achievements-item_ico_active'
                src={data.img}
                alt={`ico_${data.name}`} />
            <div>
                <p className='achievements-item_title'>
                    Достижение: {data.name}
                    <span className={widthImg === 100 ? 'achievements-item_done' : 'hidden'}>✓</span>
                </p>
                <p className='achievements-item_description'>{data.description}</p>
                <p className='achievements-item_score'>Для получения этого достижения необходимо набрать <span className='text-item-orange'>{data.score}</span> баллов.</p>
                {scoreItem === 0 && <p className='achievements-item_score'>У вас нету баллов за это достижение.</p>}
                {scoreItem > 0 && <p className='achievements-item_score'>Вы набрали: <span className='text-item-orange'>{scoreItem}</span> баллов.</p>}
            </div>
        </li>
    );
};

export default AchievementsItem;
