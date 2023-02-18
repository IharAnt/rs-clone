import MainLayout from '../../layouts/main';
import './index.css';
import AchievementsItem from '../../components/achievementsItem';
import { useAppSelector } from '../../store';

const AchievementsPage = () => {

    const achievementsData = useAppSelector(state => state.appState.achievements);

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
