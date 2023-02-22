import { useAppSelector } from '../../store';
import taskIco from './../../assets/img/taskIco.png';
import levelIco from './../../assets/img/levelIco.png';
import xpIco from './../../assets/img/xpIco.png';
import './index.css';
import AchievementsLevelComponent from '../achievementsLevelComponent';
import LineLevel from '../lineLevel';

const LevelComponent = () => {
  const {
    profile: { photo, level, doneTasks },
    isLogin,
  } = useAppSelector((state) => state.appState);

  return (
    <>
      {isLogin && (
        <div className="level-container">
          <div className="flex">
            <img className="level-container_img" src={photo} alt="profile ico" />
            <div className="level-container_xp">
              <div className="experience_done-task">
                <img className="done-task_ico" src={levelIco} alt="task ico" />
                <p className="done-task_text">Уровень: {level}</p>
              </div>
              <div className="experience_done-task">
                <img className="done-task_ico" src={xpIco} alt="task ico" />
                <LineLevel />
              </div>
              <div className="experience_done-task">
                <img className="done-task_ico" src={taskIco} alt="task ico" />
                <p className="done-task_text">Выполненно задач: {doneTasks}</p>
              </div>
            </div>
          </div>
          <AchievementsLevelComponent />
        </div>
      )}
    </>
  );
};

export default LevelComponent;
