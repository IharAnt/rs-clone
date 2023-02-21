import MotivatorsTypeSelection from '../motivatorsTypeSelection'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { getInspectorTasks, getTasks, updateModalValue, searchTasks, searchInspectorsTasks } from '../../store/motivatorsStore/sliceTasks/tasks'
import './style.css'
import UserService from '../../services/UserService'
import { userChange } from '../../store/appStore/sliceApp/slice'

export default function MotivatorsNavigation() {

  const content = useAppSelector((state) => state.tasks.motivatorsPage)

  const [menu, setMenu] = useState(false)
  const dispatch = useAppDispatch()
  const userId = useAppSelector((state) => state.appState.profile.id)
  const [search, setSearch] = useState('')

  const update = async () => {
    setSearch('')
    dispatch(getTasks({ id: userId }))
    dispatch(getInspectorTasks({ id: userId }))
    const profile = await UserService.getProfile(userId)
    dispatch(userChange(profile))
  }

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    if (content === 'myTasks') {
      dispatch(searchTasks(e.target.value))
    }
    if (content === 'testedTasks') {
      dispatch(searchInspectorsTasks(e.target.value))
    }
  }

  return (
    <div className='motivatorsNav'>
      <div className="motivatorsNav__item">
        <MotivatorsTypeSelection menu={menu} setMenu={setMenu} setSearch={setSearch}/>
        <input className='motivators-block motivatorsNav__search' type={'text'} value={search} placeholder={'поиск'} onChange={onSearch}></input>
      </div>
      <div className="motivatorsNav__item">
        <button className='motivators-block motivatorsNav__btn' disabled={content === 'myTasks' ? false : true} onClick={() => {
          setSearch('')
          dispatch(updateModalValue('create'))
        }}>Добавить мотиватор +</button>
        <div className='motivatorsNav__update' onClick={() => update()}></div>
      </div>
    </div>
  )
}
