import React from 'react';
import { useAppSelector } from '../../store';
import LoginFalse from './loginFalse';
import LoginTrue from './loginTrue';

const LoginHeader: React.FC = () => {
    const { isLogin, isLoading } = useAppSelector(state => state.appState);
    

    if (isLoading) {
      return <div></div>;
    }
    
    return (
        <div className='header-profile'>
            {isLogin
                ? <LoginTrue />
                : <LoginFalse />}
        </div>
    )
};

export default LoginHeader;
