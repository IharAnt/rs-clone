import { props } from './types';
import './style.css';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { updateModalTask, updateModalValue } from '../../store/motivatorsStore/sliceTasks/tasks';
import UserService from '../../services/UserService';
import defaultPhono from '../../assets/img/profileIcoDefault.png';
import Linkify from 'react-linkify';

export default function TestingTask({ task }: props) {
  const dispatch = useAppDispatch();
  const [avatar, setAvatar] = useState(defaultPhono);

  useEffect(() => {
    const fn = async () => {
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
      <img className="motivatorsTesting__avatar" src={avatar} alt="avatar" />
      <h2 className="motivatorsTesting__name">{task.summary}</h2>
      <div className="motivatorsTesting__description">{task.description}</div>
      <div className="motivatorsTesting__report">
        <Linkify
          componentDecorator={(decoratedHref, decoratedText, key) => (
            <a className="linkify" target="blank" href={decoratedHref} key={key}>
              {decoratedText}
            </a>
          )}
        >
          {shortReport}
        </Linkify>
      </div>
      <button
        className="motivators-block motivatorsTask__btn motivatorsTesting__btn"
        onClick={() => {
          dispatch(updateModalValue('test'));
          dispatch(updateModalTask(task));
        }}
      >
        проверить
      </button>
    </div>
  );
}
