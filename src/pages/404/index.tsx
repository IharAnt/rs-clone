import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/main';
import img404 from './../../assets/img/404img.png'
import './index.css';

const Page404 = () => {
  return (
    <MainLayout>
      <div className='page404-container'>
        <div className='page404-content'>
          <p className='page404-content_title'>Страница не найдена</p>
          <p className='page404-content_text'>Возможна она была удалена или перенесена на другой адрес</p>
          <Link to="/" className='page404-content_button'>На главную</Link>
        </div>
        <div className='page404-img'>
          <img className='w-full' src={img404} alt="404 img" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Page404;
