import MainLayout from '../../layouts/main';
import React from "react";
import titleMotivation from '../../assets/img/mainTitle.png';
import Slider from '../../components/slider';
import ButtonMainPage from '../../components/buttonMainPage/ButtonMainPage';
import './index.css';

const MainPage = () => {
  return (
    <MainLayout>
      <div className='main-container w-full flex justify-between'>
        <div className="w-6/12 flex flex-col justify-between items-center">
          <h1 className='text-indigo-800 text-5xl text-center'>Мотивацинный проект "ToDoDone"</h1>
          <Slider />
          <ButtonMainPage />
        </div>
        <div className='w-5/12'>
          <img className='w-full' src={titleMotivation} alt="title motivation" />
        </div>
      </div>
    </MainLayout >
  );
};

export default MainPage;
