import { props } from './types'
import arrow from '../../assets/icons/icon-arrow.png'
import './style.css'
import UserService from '../../services/UserService'
import { useAppDispatch, useAppSelector } from '../../store'
import { userChange } from '../../store/appStore/sliceApp/slice'

export default function MotivatorsTypeSelection({ content, setContent, menu, setMenu, setSearch }: props) {

  const dispatch = useAppDispatch()
  const userId = useAppSelector((state)=> state.appState.profile.id)

  const onChangeMotivatorsPage = async () => {
    setMenu(false)
    setSearch('')
    const profile = await UserService.getProfile(userId)
    dispatch(userChange(profile))
  }

  return (
    <div className='selectTypeMode'>
      <div className='selectTypeMode__input motivators-block' onClick={() => setMenu(!menu)} >
        <p>{content === 'myTasks' ? 'Мои мотиваторы' : 'На проверке'}</p>
        <img className={`selectTypeMode__arrow ${menu ? 'opened' : 'closed'}`} src={arrow} alt="arrow" />
      </div>
      <ul className={`selectTypeMode__menu ${menu ? 'opened' : 'closed'}`}>
        <li className={`selectTypeMode__item ${content === 'myTasks' ? 'selected' : ''}`} onClick={() => {
          setContent('myTasks')
          onChangeMotivatorsPage()
        }}>Мои мотиваторы</li>
        <li className={`selectTypeMode__item ${content === 'testedTasks' ? 'selected' : ''}`} onClick={() => {
          setContent('testedTasks')
          onChangeMotivatorsPage()
        }}>На проверке</li>
      </ul>
    </div>
  )
}
