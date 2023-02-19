import { updateModalValue } from '../../store/motivatorsStore/sliceTasks/tasks'
import './style.css'
import { useAppDispatch } from '../../store'

export default function EmptyMotivators() {
  const dispatch = useAppDispatch()
  return (
    <div className="emptyMotivators">
      <div className="emptyMotivators__title">У вас пока нет мотиваторов</div>
      <button className="motivators-block emptyMotivators__btn" onClick={() => {
        dispatch(updateModalValue('create'))
      }}>Добавить мотиватор +</button>
    </div>
  )
}
