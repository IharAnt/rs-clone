import './style.css'
import { useState } from 'react';
import MotivatorsNavigation from '../../components/motivatorsNavigation';
import MotivatorsContent from '../../components/motivatorsContent';
import MainLayout from '../../layouts/main';
import { useAppSelector } from '../../store';
import { Navigate } from 'react-router-dom';

const MotivatorsPage = () => {

  const [content, setContent] = useState('myTasks');
  const isLogin = useAppSelector((state) => state.appState.isLogin)

  return (
    <MainLayout>
      {!isLogin ? <Navigate to={"/"} /> : ''} 
      <div className='motivators'>
        <MotivatorsNavigation content={content} setContent={setContent} />
        <MotivatorsContent content={content} setContent={setContent} />
      </div>
    </MainLayout>
  );
};

export default MotivatorsPage;
