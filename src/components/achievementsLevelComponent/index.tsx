import { useAppSelector } from '../../store';
import ItemLevelAchievements from '../itemLevelAchievements';
import './index.css';

const AchievementsLevelComponent = () => {
  const achievementsData = useAppSelector((state) => state.appState.achievements);

  return (
    <ul className="achievements-container_level">
      {achievementsData.map((item) => {
        return <ItemLevelAchievements {...item} key={item.id} />;
      })}
    </ul>
  );
};

export default AchievementsLevelComponent;
