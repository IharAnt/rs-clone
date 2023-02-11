import React, { FC, useEffect } from 'react';
import { NAVIGATION_ROUTES } from '../../routes';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { pageChange } from '../../store/appStore/sliceApp/slice';

const Navigation: FC = () => {

    const actualPage = useAppSelector(state => state.appState.activePage);
    const location = useLocation().pathname
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(pageChange(location));
    }, [dispatch, location]);

    return <ul className='flex gap-4 header-navigation'>
        {NAVIGATION_ROUTES.map((route) => {
            return (
                <li key={route.name} className='list-none'>
                    <Link
                        className={`text-indigo-800 ${actualPage === route.path
                            ? 'font-bold cursor-default'
                            : 'border-indigo-800 border-solid hover:border-b-2'}`}
                        to={route.path}
                    >{route.name}
                    </Link>
                </li>
            )
        })
        }
    </ul>;
};

export default Navigation;
