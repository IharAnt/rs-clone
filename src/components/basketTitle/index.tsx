import { useAppDispatch, useAppSelector } from '../../store';
import basketRefresh from './../../assets/img/basketRefreshIco.png';
import './index.css';
import { refresBasket } from '../../store/storePage/sliceStore/slice';

const BasketTitle = () => {

    const { basketCount } = useAppSelector(state => state.storePage);
    const dispatch = useAppDispatch();

    return (
        <>
            <div className='basket-title-container'>
                <p className='basket-title-text'>Корзина</p>
                {basketCount > 0 && <img
                    className='basket-title-refresh'
                    src={basketRefresh}
                    onClick={() => dispatch(refresBasket(''))}
                    alt="basket refresh" />}
            </div>
            <p className='basker-summary'>Товаров в корзине: {basketCount}</p>
        </>
    );
};

export default BasketTitle;
