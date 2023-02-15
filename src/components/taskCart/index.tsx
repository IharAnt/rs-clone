import { props } from './types'
import './style.css'
import strong from '../../assets/icons/taskTypes/strong.png'
import intelligence from '../../assets/icons/taskTypes/intelligence.png'
import idler from '../../assets/icons/taskTypes/idler.png'
import learner from '../../assets/icons/taskTypes/learner.png'
import sleep from '../../assets/icons/taskTypes/sleep.png'
import teacher from '../../assets/icons/taskTypes/teacher.png'
import TaskStatusEnum from '../../types/enums/TaskStatusEnum'
import moticoins from '../../assets/img/motekoinIco.png'
import { updateTaskStatus } from '../../store/motivatorsStore/sliceTasks/tasks'
import { useAppDispatch } from '../../store'
import Modal from '../modal'
import { useState } from 'react'
import CompleteTask from '../completeTask'

export default function TaskCart({ task }: props) {

  const typeIcons = [{ type: 'power', icon: strong, title: 'силач' },
  { type: 'intelligence', icon: intelligence, title: 'умник' },
  { type: 'idler', icon: idler, title: 'бездельник' },
  { type: 'learner', icon: learner, title: 'ученик' },
  { type: 'sleep', icon: sleep, title: 'соня' },
  { type: 'teacher', icon: teacher, title: 'учитель' }]

  const type = typeIcons.find((item) => item.type === task.type)
  const isEndedTask = task.status === TaskStatusEnum.Cancelled || task.status === TaskStatusEnum.Rejected || task.status === TaskStatusEnum.Approved
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState(false)

  function getTaskStatus() {
    switch (task.status) {
      case TaskStatusEnum.Cancelled:
        return 'Отменена';
      case TaskStatusEnum.Rejected:
        return 'Отклонена'
      default:
        return 'Принята'
    }
  }

  return (
    <div className='motivatorsTask'>
      <div className="motivatorsTask__header">
        <h2 className="motivatorsTask__title">{task.summary}</h2>
        <img className='motivatorsTask__icon' src={type?.icon} alt="task" title={type?.title} />
      </div>
      {isEndedTask ?
        task.messages ?
          <div>
            <div className="motivatorsTask__description">Комментарий проверяющего: <span className='italic'>{!task.messages[task.messages.length - 1]}</span></div>
            <div className="motivatorsTask__description">Статус: {getTaskStatus()}</div>
          </div>
          : <div className="motivatorsTask__description">Статус: {getTaskStatus()}</div>
        : <div>
          <div className="motivatorsTask__description">Описание: <span className='italic'>{task.description}</span></div>
          <div className="motivatorsTask__deadline">Дедлайн: {task.dueDate ? task.dueDate : 'нет'}</div>
        </div>
      }
      <div className="motivatorsTask__completion">
        <div className='motivatorsTask__coins'>Награда: {task.points} <img className='motivatorsTask__coinsImg' src={moticoins} alt="moticoins" title='мотикойны' /></div>
        {task.status === TaskStatusEnum.Open ? <button className='motivators-block motivatorsTask__btn motivatorsTask__btn--open' onClick={() => {
          dispatch(updateTaskStatus({ id: task.id, status: TaskStatusEnum.Inprogress }))
        }}>выполнять</button> : ''}
        {task.status === TaskStatusEnum.Inprogress ?
          <>
            <button className='motivators-block motivatorsTask__btn motivatorsTask__btn--inProgress' onClick={() => setModal(true)}>завершить</button>
            <Modal isOpen={modal} setModal={setModal}>
              <CompleteTask setModal={setModal} task={task}/>
            </Modal>
          </> : ''}
      </div>
    </div>
  )
}
