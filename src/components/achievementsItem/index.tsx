import { IAchievementsPageData } from '../../pages/achievements/types/types';
import './index.css';

const AchievementsItem = (data: IAchievementsPageData) => {
    return (
        <li className='achievements-container_item'>
            <img className='achievements-item_ico_dissable' src={data.img} alt={`ico_${data.name}`} />
            <img className='achievements-item_ico_active' src={data.img} alt={`ico_${data.name}`} />
            <div>
                <p className='achievements-item_title'>{`Достижение: ${data.name}`}</p>
                <p className='achievements-item_description'>{data.description}</p>
                <p className='achievements-item_score'>{`Для получения этого достижения необходимо набрать ${data.score} баллов.`}</p>
                <p className='achievements-item_score'>Вы набрали: 200 баллов.</p>
            </div>
        </li>
    );
};

export default AchievementsItem;
