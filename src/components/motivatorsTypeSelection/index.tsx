import { props } from './types';
import arrow from '../../assets/icons/icon-arrow.png';
import './style.css';
import UserService from '../../services/UserService';
import { useAppDispatch, useAppSelector } from '../../store';
import { userChange } from '../../store/appStore/sliceApp/slice';
import { selectMotivatorsPage } from '../../store/motivatorsStore/sliceTasks/tasks';

export default function MotivatorsTypeSelection({ menu, setMenu, setSearch }: props) {
  const content = useAppSelector((state) => state.tasks.motivatorsPage);

  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.appState.profile.id);

  const onChangeMotivatorsPage = async () => {
    setMenu(false);
    setSearch('');
    const profile = await UserService.getProfile(userId);
    dispatch(userChange(profile));
  };

  const getTitleSelect = (): string => {
    switch (content) {
      case 'myTasks':
        return 'Созданные для меня';
      case 'createdTasks':
        return 'Созданные мной';
      case 'testedTasks':
        return 'На проверке';
      default:
        return '';
    }
  };

  return (
    <div className="selectTypeMode">
      <div className="selectTypeMode__input motivators-block" onClick={() => setMenu(!menu)}>
        <p>{getTitleSelect()}</p>
        <img className={`selectTypeMode__arrow ${menu ? 'opened' : 'closed'}`} src={arrow} alt="arrow" />
      </div>
      <ul className={`selectTypeMode__menu ${menu ? 'opened' : 'closed'}`}>
        <li
          className={`selectTypeMode__item ${content === 'myTasks' ? 'selected' : ''}`}
          onClick={() => {
            dispatch(selectMotivatorsPage('myTasks'));
            onChangeMotivatorsPage();
          }}
        >
          Созданные для меня
        </li>
        <li
          className={`selectTypeMode__item ${content === 'createdTasks' ? 'selected' : ''}`}
          onClick={() => {
            dispatch(selectMotivatorsPage('createdTasks'));
            onChangeMotivatorsPage();
          }}
        >
          Созданные мной
        </li>
        <li
          className={`selectTypeMode__item ${content === 'testedTasks' ? 'selected' : ''}`}
          onClick={() => {
            dispatch(selectMotivatorsPage('testedTasks'));
            onChangeMotivatorsPage();
          }}
        >
          На проверке
        </li>
      </ul>
    </div>
  );
}
