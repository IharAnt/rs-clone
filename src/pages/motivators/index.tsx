import './style.css'
import MotivatorsNavigation from '../../components/motivatorsNavigation';
import MotivatorsContent from '../../components/motivatorsContent';
import MainLayout from '../../layouts/main';
import { useAppSelector } from '../../store';
import { Navigate } from 'react-router-dom';

const MotivatorsPage = () => {

  const isLogin = useAppSelector((state) => state.appState.isLogin)

  return (
    <MainLayout>
      {!isLogin ? <Navigate to={"/"} /> : ''} 
      <div className='motivators'>
        <MotivatorsNavigation />
        <MotivatorsContent />
      </div>
    </MainLayout>
  );
};

export default MotivatorsPage;
