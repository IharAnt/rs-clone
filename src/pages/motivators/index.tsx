import './style.css'
import { useState } from 'react';
import MotivatorsNavigation from '../../components/motivatorsNavigation';
import MotivatorsContent from '../../components/motivatorsContent';
import MainLayout from '../../layouts/main';

const MotivatorsPage = () => {

  const [content, setContent] = useState('myTasks');

  return (
    <MainLayout>
      <div className='motivators'>
        <MotivatorsNavigation content={content} setContent={setContent} />
        <MotivatorsContent content={content} setContent={setContent} />
      </div>
    </MainLayout>
  );
};

export default MotivatorsPage;
