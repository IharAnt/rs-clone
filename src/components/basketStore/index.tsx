import { useState } from 'react';
import motikoin from './../../assets/img/motekoinIco.png'

import './index.css';

interface IBasketOpen {
    setActive: boolean
}

const BasketStore = ({ setActive }: IBasketOpen) => {

    const [isBuy, setIsBuy] = useState(false);


    return (
        <div className={`main-field-basket ${setActive ? 'main-field-basket_open' : ''}`}>
            <p className='basket-title-text'>Корзина</p>
            <p className='basker-summary'>Товаров в корзине: 5</p>
            <div className='basket-list-product'></div>
            <div className='basket-buy'>
                <div className='basket-buy_container'>
                    <p className='basket-buy_text'>На счету: 5000</p>
                    <img className='basket-buy_ico' src={motikoin} alt="motikoin ico" />
                </div>
                <div className='basket-buy_container'>
                    <p className={`basket-buy_text_check ${isBuy ? 'text-green-700' : 'text-red-600'}`}>Необходимо: 4500</p>
                    <img className='basket-buy_ico' src={motikoin} alt="motikoin ico" />
                </div>
                <button className={`buy-button ${isBuy ? 'buy-button_active' : ''}`}>Купить</button>
            </div>

        </div>

    );
};

export default BasketStore;
