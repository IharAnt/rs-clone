import bored from '../../assets/img/bored.png'
import './style.css'

export default function EmptyTestTasks() {
  return (
    <div className='emptyTestList'>
      <div className='emptyTestList__title'>На проверке пока ничего нет</div>
      <img className='emptyTestList__image' src={bored} alt="bored" />
    </div>
  )
}
