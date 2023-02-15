import { useAppDispatch, useAppSelector } from '../../store';
import { useEffect, useState } from 'react';
import basketPlus from './../../assets/img/basketAddIco.png';
import './index.css';
import { IOrder } from '../../types/interfaces/IOrder';
import ShopService from '../../services/ShopService';
import { addProductBasket } from '../../store/storePage/sliceStore/slice';

const HistoryStore = () => {

    const { IsHistoryOpen } = useAppSelector(state => state.storePage);
    const [orderArr, setOrderArr] = useState([] as IOrder[]);
    const dispatch = useAppDispatch();
    const id = '1'

    useEffect((() => {

        const getOrder = async () => {
            const orders = await ShopService.getOrders(id);
            setOrderArr(orders);
        }
        getOrder();

    }), [orderArr, IsHistoryOpen])

    return (
        <div className={`main-field-history ${IsHistoryOpen ? 'main-field-history_open' : ''}`}>
            <p className='basket-title-text'>История</p>
            <div>
                {orderArr.map((item) => {
                    return (
                        <div className='item-history-container'>
                            <div className='item-history-control'>
                                <img onClick={() => dispatch(addProductBasket(item.product))} className='item-control_plus' src={basketPlus} alt="basket plus" />
                            </div>
                            <p className='item-history-count'>{item.count}</p>
                            <img className='item-history-img' src={item.product.thumbnail} alt="item history img" />
                            <p className='item-history-title'>{item.product.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>

    );
};

export default HistoryStore;
