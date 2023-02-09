import React from "react";
import ratIco from './../../assets/img/ratIco.png'
import xpIco from './../../assets/img/xpIco.png'
import taskIco from './../../assets/img/taskIco.png'
import achiIco from './../../assets/img/achiIco.png'
import './index.css';

const TableRatingTitle = () => {

  return (
      <div>
        <div className='table-container_item'>
          <div className='table-container_ico'>
            <img className='w-full' src={ratIco} alt="rat ico" />
          </div>
          <p>Имя участника</p>
          <div className='table-container_ico title-ico_xp' data-title="Софийский собор">
            <img className='w-full' src={xpIco} alt="xp ico" />
            <p className='table-container_ico-text title-text_xp'>Суммарное количество опыта (XP)</p>
          </div>
          <div className='table-container_ico title-ico_task'>
            <img className='w-full' src={taskIco} alt="task ico" />
            <p className='table-container_ico-text title-text_task'>Количество выполненных квестов</p>
          </div>
          <div className='table-container_ico title-ico_achi'>
            <img className='w-full' src={achiIco} alt="achi ico" />
            <p className='table-container_ico-text title-text_achi'>Количество полученных достижений</p>
          </div>
        </div>
      </div>
  );
};

export default TableRatingTitle;
