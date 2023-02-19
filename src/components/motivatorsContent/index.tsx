import MotivatorsTasks from '../motivatorsTasks'
import TestingTasksList from '../testingTasksList'
import { useState, useEffect } from 'react'
import { props } from './types'
import './style.css'
import Modal from '../modal'
import MotivatorsModal from '../motivatorsModal'
import { useAppDispatch, useAppSelector } from '../../store'
import { getInspectorTasks, getTasks } from '../../store/motivatorsStore/sliceTasks/tasks'

export default function MotivatorsContent({ content, setContent }: props) {

  const handleMotivatorsPage = () => {
    switch (content) {
      case 'myTasks':
        return loading ?
          <div className='motivators-loading'><div className='motivators-loadingItem'></div></div> :
            <MotivatorsTasks />
      case 'testedTasks':
        return loading ? <div className='motivators-loading'><div className='motivators-loadingItem'></div></div> : <TestingTasksList />
      default: return <></>
    }
  }

  const handleModal = (currentModal: string | null) => {
    if (currentModal) setModal(true)
    else setModal(false)
  }

  const userId = useAppSelector((state) => state.appState.profile.id)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (content === 'myTasks' && userId) dispatch(getTasks({ 'id': userId }))
    if (content === 'testedTasks') dispatch(getInspectorTasks({ 'id': userId }))
  },
    [content, userId]
  )

  const [modal, setModal] = useState(false)
  const modalValue = useAppSelector((state) => state.tasks.modal)
  const loading = useAppSelector((state) => state.tasks.loading)

  useEffect(() => {
    handleModal(modalValue)
  }, [modalValue])

  return (
    <div className="motivatorsCnt">
      {handleMotivatorsPage()}
      <Modal isOpen={modal} setModal={setModal}>
        <MotivatorsModal />
      </Modal>
    </div>
  )
}
