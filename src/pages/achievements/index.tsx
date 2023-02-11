import MainLayout from '../../layouts/main';
import './index.css';
import AchievementsPageData from '../../data/AchievementsPageData';

const AchievementsPage = () => {
    return (
        <MainLayout>
            <div className='achievements-container'>
                <div className='achievements-container_title'>
                    <h1 className='achievements-title_text'>Достижения</h1>
                </div>
                <ul className='achievements-container-items'>
                    {AchievementsPageData.map((item, index) => {
                        return (
                            <li key={index} className='achievements-container_item'>
                                <img className='achievements-item_ico_dissable' src={item.img} alt={`ico_${item.name}`} />
                                <img className='achievements-item_ico_active' src={item.img} alt={`ico_${item.name}`} />

                                <div>
                                    <p className='achievements-item_title'>{`Достижение: ${item.name}`}</p>
                                    <p className='achievements-item_description'>{item.description}</p>
                                    <p className='achievements-item_score'>{`Для получения этого достижения необходимо набрать ${item.score} баллов.`}</p>
                                    <p className='achievements-item_score'>Вы набрали: 200 баллов.</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </MainLayout >
    );
};

export default AchievementsPage;
