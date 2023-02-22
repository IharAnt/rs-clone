import './style.css';
import MotivatorsNavigation from '../../components/motivatorsNavigation';
import MotivatorsContent from '../../components/motivatorsContent';
import MainLayout from '../../layouts/main';
import { useAppSelector } from '../../store';
import { Navigate } from 'react-router-dom';

const MotivatorsPage = () => {
  const isLoadingEnd = useAppSelector((state) => state.appState.isLoadingEnd);
  const isLogin = useAppSelector((state) => state.appState.isLogin);

  return (
    <MainLayout>
      <div className="motivators">
        {isLoadingEnd ? (
          !isLogin ? (
            <Navigate to={'/'} />
          ) : (
            <>
              <MotivatorsNavigation />
              <MotivatorsContent />
            </>
          )
        ) : (
          ''
        )}
      </div>
    </MainLayout>
  );
};

export default MotivatorsPage;
