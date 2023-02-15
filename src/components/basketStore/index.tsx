import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { ICartProduct } from '../../types/interfaces/IOrder';
import motikoin from './../../assets/img/motekoinIco.png'
import basketPlus from './../../assets/img/basketAddIco.png';
import basketMinus from './../../assets/img/basketMinusIco.png';
import basketDelete from './../../assets/img/basketDeleteIco.png';
import './index.css';
import { deleteProductBasket, minusProductBasket, plusProductBasket } from '../../store/storePage/sliceStore/slice';

const BasketStore = () => {

    const actualMotikoin = 1111;
    const [isBuy, setIsBuy] = useState(true);
    const [basketArr, setBasketArr] = useState([] as ICartProduct[]);
    const [necessaryMot, setNecessaryMot] = useState(0);
    const dispatch = useAppDispatch();
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
                {basketArr.map((item) => {
                    return (
                        <div className='basket-item-product'>
                            <div className='basket-item-product_control'>
                                <img onClick={() => dispatch(plusProductBasket(item.product.id))} className='basket-control_button' src={basketPlus} alt="basket plus" />
                                <img onClick={() => dispatch(minusProductBasket(item.product.id))} className='basket-control_button' src={basketMinus} alt="basket minus" />
                                <img onClick={() => dispatch(deleteProductBasket(item.product.id))} className='basket-control_button' src={basketDelete} alt="basket delete" />
                            </div>
                            <img className='basket-item-product_img' src={item.product.thumbnail} alt="product img" />
                            <div className='basket-item-info'>
                                <p className='basket-item-product_title'>{item.product.title}</p>
                                <div className='w-full'>
                                    <p className='basket-item-ico-text'>{`Цена: ${item.product.price}`}</p>
                                    <p className='basket-item-ico-text'>{`Количество: ${item.count}`}</p>
                                    <div className='basket-item-info-price'>
                                        <p className='basket-item-ico-text'>{`К оплате: ${item.count * item.product.price}`}</p>
                                        <img className='basket-item-ico' src={motikoin} alt="motikoin ico" />
                                    </div>
                                </div>
                            </div>
                        </div>)
                })}
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
