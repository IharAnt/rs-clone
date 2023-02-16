import historyIco from './../../assets/img/historyIco.png';
import { useAppDispatch, useAppSelector } from '../../store';
import { openHistoryWindow } from '../../store/storePage/sliceStore/slice';
import './index.css';
import ControlBasket from '../controlBasket';

const ControlStore = () => {

    const basketCount = useAppSelector(state => state.storePage.basketCount);
    const dispatch = useAppDispatch();

    return (
        <div className='title-container-store_control'>
            {basketCount > 0 && <p className='basket-quality'>{basketCount}</p>}
            <img
                className='store-ico'
                onClick={() => dispatch(openHistoryWindow(''))}
                src={historyIco}
                alt="history ico"
            />
            <ControlBasket />
        </div>

    );
};

export default ControlStore;
