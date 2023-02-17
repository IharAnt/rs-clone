import './style.css'
import { useState } from 'react';
import MotivatorsLayout from '../../layouts/motivators/index'
import MotivatorsNavigation from '../../components/motivatorsNavigation';
import MotivatorsContent from '../../components/motivatorsContent';

const MotivatorsPage = () => {

  const [content, setContent] = useState('myTasks');

  return (
    <MotivatorsLayout>
      <MotivatorsNavigation content={content} setContent={setContent} />
      <MotivatorsContent content={content} setContent={setContent} />
    </MotivatorsLayout>
  );
};

export default MotivatorsPage;
