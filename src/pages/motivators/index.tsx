import './style.css'
import { useState } from 'react';
import MotivatorsLayout from '../../layouts/motivators/index'
import MotivatorsTypeSelection from '../../components/motivatorsTypeSelection/index';
import MotivatorsTaskHeaders from '../../components/motivatorsTaskHeaders';
import MotivatorsTasks from '../../components/motivatorsTasks/index';
import { ITask } from '../../types/interfaces/ITask';
import TaskStatusEnum from '../../types/enums/TaskStatusEnum';
import TaskTypeEnum from '../../types/enums/TaskTypeEnum';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import { type } from '@testing-library/user-event/dist/type';
import { getTasks } from '../../store/appStore/sliceTasks/tasks';
import { useAppDispatch, useAppSelector } from '../../store';


const MotivatorsPage = () => {

  const [content, setContent] = useState('myTasks');
  const [menu, setMenu] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(()=> {
    dispatch(getTasks())},
    []
  )

  const data = useAppSelector((state) => state.tasks.tasks)
  // const data: ITask[] = [{
  //   id: 'string',
  //   executor: { id: '1', email: 'ss', name: 'Stepan' },
  //   inspector: { id: '1', email: 'ss', name: 'Stepan' },
  //   summary: 'отжаться 10 раз',
  //   description: 'сделать 10 отжиманий',
  //   dueDate: '233',
  //   type: TaskTypeEnum.Power,
  //   status: TaskStatusEnum.Open,
  //   points: 200
  // },{
  //   id: 'string',
  //   executor: { id: '1', email: 'ss', name: 'Stepan' },
  //   inspector: { id: '1', email: 'ss', name: 'Stepan' },
  //   summary: 'отжаться 10 раз',
  //   description: 'сделать 10 отжиманий',
  //   dueDate: '233',
  //   type: TaskTypeEnum.Power,
  //   status: TaskStatusEnum.Inprogress,
  //   points: 200
  // },{
  //   id: 'string',
  //   executor: { id: '1', email: 'ss', name: 'Stepan' },
  //   inspector: { id: '1', email: 'ss', name: 'Stepan' },
  //   summary: 'отжаться 10 раз',
  //   description: 'сделать 10 отжиманий',
  //   dueDate: '233',
  //   type: TaskTypeEnum.Teacher,
  //   status: TaskStatusEnum.Resolved,
  //   points: 200
  // }];

  return (
    <MotivatorsLayout>
      <div className='motivatorsNav'>
        <div className="motivatorsNav__item">
          <MotivatorsTypeSelection content={content} setContent={setContent} menu={menu} setMenu={setMenu} />
          <input className='motivators-block' type={'text'} placeholder={'поиск'}></input>
        </div>
        <div className="motivatorsNav__item">
          <button className='motivators-block'>добавить  свою задачу +</button>
        </div>
      </div>
      <div className="motivatorsCnt">
        <div className="motivatorsCnt-container">
          {content === 'myTasks' ? <>
            <MotivatorsTaskHeaders />
            <MotivatorsTasks data={data} />
          </> : ''}
          {content === 'testedTasks' ? <>
            тестируется
          </> : ''}
        </div>
      </div>
    </MotivatorsLayout >
  );
};

export default MotivatorsPage;
