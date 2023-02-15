import basketIco from './../../assets/img/basketIco.png';
import historyIco from './../../assets/img/historyIco.png';
import { useAppDispatch, useAppSelector } from '../../store';
import { openBasketWindow, openHistoryWindow } from '../../store/storePage/sliceStore/slice';
import './index.css';

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
            <img
                className='store-ico'
                onClick={() => dispatch(openBasketWindow(''))}
                src={basketIco}
                alt="basket ico"
            />
        </div>

    );
};

export default ControlStore;
