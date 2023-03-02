import { FC, useEffect, useState } from 'react';
import { NAVIGATION_ROUTES } from '../../routes';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { pageChange } from '../../store/appStore/sliceApp/slice';
import Modal from '../modal';
import Authorization from '../authorization';

const Navigation: FC = () => {
  const { isLogin, activePage } = useAppSelector((state) => state.appState);
  const [modalAuthorization, setModalAuthorization] = useState(false);
  const location = useLocation().pathname;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(pageChange(location));
  }, [dispatch, location]);

  return (
    <>
      {!isLogin && <Modal isOpen={modalAuthorization} setModal={setModalAuthorization}>
        <Authorization />
      </Modal>}
      <ul className="flex gap-4 header-navigation">
        {NAVIGATION_ROUTES.map((route) => {
          return (
            <li key={route.name} className="list-none">
              {(!isLogin && route.path) !== '/motivators' ?
                <Link
                  className={`text-indigo-800 ${activePage === route.path
                    ? 'font-bold cursor-default'
                    : 'border-indigo-800 border-solid hover:border-b-2'
                    }`}
                  to={route.path}
                >
                  {route.name}
                </Link> : <button
                  className='text-indigo-800 border-indigo-800 border-solid hover:border-b-2'
                  onClick={() => setModalAuthorization(true)}
                >{route.name}</button>
              }
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navigation;
