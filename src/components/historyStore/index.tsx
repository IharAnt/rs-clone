import { useAppSelector } from '../../store';
import { useEffect, useState } from 'react';
import './index.css';
import { IOrder } from '../../types/interfaces/IOrder';
import ShopService from '../../services/ShopService';
import ItemHistoryProduct from '../itemHistoryProduct';

const HistoryStore = () => {

    const { IsHistoryOpen } = useAppSelector(state => state.storePage);
    const [orderArr, setOrderArr] = useState([] as IOrder[]);
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
                {orderArr.map((item) =>
                    <ItemHistoryProduct {...item} key={item.id} />)}
            </div>
        </div>

    );
};

export default HistoryStore;
