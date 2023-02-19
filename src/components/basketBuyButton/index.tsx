import { useEffect, useState } from 'react';
import ShopService from '../../services/ShopService';
import { useAppDispatch, useAppSelector } from '../../store';
import { refresBasket } from '../../store/storePage/sliceStore/slice';
import motikoin from './../../assets/img/motekoinIco.png';
import './index.css';

const BasketBuyButton = () => {


    const { id, moticoins } = useAppSelector(state => state.appState.profile);
    const [isBuy, setIsBuy] = useState(true);
    const [necessaryMot, setNecessaryMot] = useState(0);
    const { basketProducts } = useAppSelector(state => state.storePage);
    const dispatch = useAppDispatch();

    useEffect((() => {
        setIsBuy(true);
        const summaMot = basketProducts.reduce((a, b) => a + b.count * b.product.price, 0);
        setNecessaryMot(summaMot);
        if (summaMot > moticoins) { setIsBuy(false) };
    }), [basketProducts])

    return (
        <div className='basket-buy'>
            <div className='basket-buy_container'>
                <p className='basket-buy_text'>На счету: {moticoins}</p>
                <img className='basket-buy_ico' src={motikoin} alt="motikoin ico" />
            </div>
            <div className='basket-buy_container'>
                <p className={`basket-buy_text_check ${isBuy ? 'text-green-700' : 'text-red-600'}`}>Необходимо: {necessaryMot}</p>
                <img className='basket-buy_ico' src={motikoin} alt="motikoin ico" />
            </div>
            <button
                className={`buy-button ${isBuy ? 'buy-button_active' : ''}`}
                onClick={() => {
                    ShopService.addOrders(id, basketProducts)
                    dispatch(refresBasket(''))
                }}>
                Купить
            </button>
        </div>
    );
};

export default BasketBuyButton;
