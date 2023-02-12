import React from 'react';
import { useAppSelector } from '../../store';
import LoginFalse from './loginFalse';
import LoginTrue from './loginTrue';

const LoginHeader: React.FC = () => {
    const IsLogin = useAppSelector(state => state.appState.isLogin);
    
    return (
        <div className='header-profile'>
            {IsLogin
                ? <LoginTrue />
                : <LoginFalse />}
        </div>
    )
};

export default LoginHeader;
