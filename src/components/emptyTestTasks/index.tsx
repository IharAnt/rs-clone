import bored from '../../assets/img/bored.png'
import { useAppDispatch } from '../../store'
import { updateModalValue } from '../../store/motivatorsStore/sliceTasks/tasks'
import './style.css'

export default function EmptyTestTasks() {

  const dispatch = useAppDispatch()

  return (
    <div className='emptyTestList'>
      <div className='emptyTestList__title' onClick={() => {
          console.log('!!');
          dispatch(updateModalValue('create'))}}>На проверке пока ничего нет</div>
      <img className='emptyTestList__image' src={bored} alt="bored" />
    </div>
  )
}
