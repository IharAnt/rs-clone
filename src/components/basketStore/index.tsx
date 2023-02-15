import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store';
import { ICartProduct } from '../../types/interfaces/IOrder';
import ItemBasketControl from '../itemBasketProduct';
import motikoin from './../../assets/img/motekoinIco.png'
import './index.css';


const BasketStore = () => {

    const actualMotikoin = 1111;
    const [isBuy, setIsBuy] = useState(true);
    const [basketArr, setBasketArr] = useState([] as ICartProduct[]);
    const [necessaryMot, setNecessaryMot] = useState(0);
    const { basketProducts, basketCount, IsBasketOpen } = useAppSelector(state => state.storePage);

    useEffect((() => {
        setBasketArr(basketProducts);
        setIsBuy(true);
        const summaMot = basketProducts.reduce((a, b) => a + b.count * b.product.price, 0);
        setNecessaryMot(summaMot);
        if (summaMot > actualMotikoin) { setIsBuy(false) };
    }), [basketProducts])

    return (
        <div className={`main-field-basket ${IsBasketOpen ? 'main-field-basket_open' : ''}`}>
            <p className='basket-title-text'>Корзина</p>
            <p className='basker-summary'>Товаров в корзине: {basketCount}</p>
            <div className='basket-list-product'>
                {basketArr.map((item) =>
                    <ItemBasketControl {...item} key={item.product.id} />
                )}
            </div>
            <div className='basket-buy'>
                <div className='basket-buy_container'>
                    <p className='basket-buy_text'>На счету: {actualMotikoin}</p>
                    <img className='basket-buy_ico' src={motikoin} alt="motikoin ico" />
                </div>
                <div className='basket-buy_container'>
                    <p className={`basket-buy_text_check ${isBuy ? 'text-green-700' : 'text-red-600'}`}>Необходимо: {necessaryMot}</p>
                    <img className='basket-buy_ico' src={motikoin} alt="motikoin ico" />
                </div>
                <button className={`buy-button ${isBuy ? 'buy-button_active' : ''}`}>Купить</button>
            </div>

        </div>

    );
};

export default BasketStore;
