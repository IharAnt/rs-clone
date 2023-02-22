import { props } from './types';
import './style.css';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { updateModalTask, updateModalValue } from '../../store/motivatorsStore/sliceTasks/tasks';
import UserService from '../../services/UserService';
import defaultPhono from '../../assets/img/profileIcoDefault.png';

export default function TestingTask({ task }: props) {
  const dispatch = useAppDispatch();
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const fn = async () => {
      setAvatar(defaultPhono);
      const profile = await UserService.getProfile(task.executor.id);
      setAvatar(profile.photo || defaultPhono);
    };
    fn();
  }, [dispatch]);

  let shortReport = task.taskReport;

  if (shortReport!.length > 80) {
    shortReport = task.taskReport!.slice(0, 80);
    shortReport = shortReport.slice(0, shortReport.lastIndexOf(' ')).concat('...');
  }

  return (
    <div className="motivatorsTesting__item motivatorsTesting-grid">
      {avatar ? (
        <>
          <img className="motivatorsTesting__avatar" src={avatar} alt="avatar" />
          <h2 className="motivatorsTesting__name">{task.summary}</h2>
          <div className="motivatorsTesting__description">{task.description}</div>
          <div className="motivatorsTesting__report">{shortReport}</div>
          <button
            className="motivators-block motivatorsTask__btn motivatorsTesting__btn"
            onClick={() => {
              dispatch(updateModalValue('test'));
              dispatch(updateModalTask(task));
            }}
          >
            проверить
          </button>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
