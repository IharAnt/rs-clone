import { props } from './types';
import './style.css';
import { useState, useEffect, ReactNode } from 'react';
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

  const doShortString = (string: string) => {
    let shortString = string.slice(0, 80);
    shortString = shortString.slice(0, shortString.lastIndexOf(' ')).concat('...');
    return string!.length > 80 ? shortString : string;
  };

  const linkify = (node: ReactNode) => (
    <Linkify
      componentDecorator={(decoratedHref, decoratedText, key) => (
        <a className="linkify" target="blank" href={decoratedHref} key={key}>
          {decoratedText}
        </a>
      )}
    >
      {node}
    </Linkify>
  );

  return (
    <div
      className="motivatorsTesting__item motivatorsTesting-grid"
      onClick={(e) => {
        e.stopPropagation();
        dispatch(updateModalValue('info'));
        dispatch(updateModalTask(task));
      }}
    >
      <img className="motivatorsTesting__avatar" src={avatar} alt="avatar" />
      <h2 className="motivatorsTesting__name">{task.summary}</h2>
      <div className="motivatorsTesting__description">{linkify(doShortString(task.description as string))}</div>
      <div className="motivatorsTesting__report">{linkify(doShortString(task.taskReport as string))}</div>
      <button
        className="motivators-block motivatorsTask__btn motivatorsTesting__btn"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(updateModalValue('test'));
          dispatch(updateModalTask(task));
        }}
      >
        проверить
      </button>
    </div>
  );
}
