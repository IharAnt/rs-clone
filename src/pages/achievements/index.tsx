import MainLayout from '../../layouts/main';
import './index.css';

const AchievementsPage = () => {
    return (
        <MainLayout>
            <div className='achievements-container'>
                <div className='achievements-container_title'>
                    <h1 className='achievements-title_text'>Достижения</h1>
                </div>
                <div className='achievements-container_item'>
                    <img src="" alt="" />
                    <div>
                        <p>Название</p>
                        <p>Описание</p>
                        <p>Набранно баллов</p>
                    </div>
                </div>

            </div>
        </MainLayout >
    );
};

export default AchievementsPage;
