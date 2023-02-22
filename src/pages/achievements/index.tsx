import MainLayout from '../../layouts/main';
import './index.css';
import AchievementsItem from '../../components/achievementsItem';
import { useAppDispatch, useAppSelector } from '../../store';
import { useEffect } from 'react';
import { achievementsChange } from '../../store/appStore/sliceApp/slice';
import RatingService from '../../services/RatingService';

const AchievementsPage = () => {
  const { achievements } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const funcGetAchievements = async () => {
      const achievements = await RatingService.getAchivements();
      dispatch(achievementsChange(achievements));
    };
    funcGetAchievements();
  }, [dispatch]);

  return (
    <MainLayout>
      <div className="achievements-container">
        <div className="achievements-container_title">
          <h1 className="achievements-title_text">Достижения</h1>
        </div>
        <ul className="achievements-container-items">
          {achievements.map((item) => {
            return <AchievementsItem {...item} key={item.name} />;
          })}
        </ul>
      </div>
    </MainLayout>
  );
};

export default AchievementsPage;
