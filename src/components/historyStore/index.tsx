import { useAppDispatch, useAppSelector } from '../../store';
import { useEffect, useState } from 'react';
import './index.css';
import ShopService from '../../services/ShopService';
import ItemHistoryProduct from '../itemHistoryProduct';
import { refreshOrders } from '../../store/storePage/sliceStore/slice';

const HistoryStore = () => {
  const { IsHistoryOpen, orders } = useAppSelector((state) => state.storePage);
  const IsLogin = useAppSelector((state) => state.appState.isLogin);
  // const [orderArr, setOrderArr] = useState([] as IOrder[]);
  const id = useAppSelector((state) => state.appState.profile.id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getOrder = async () => {
      if (id) {
        const orders = await ShopService.getOrders(id);
        dispatch(refreshOrders(orders));
      }
    };
    getOrder();
  }, [IsHistoryOpen, id]);

  return (
    <>
      {IsLogin && (
        <div className={`main-field-history ${IsHistoryOpen ? 'main-field-history_open' : ''}`}>
          <p className="basket-title-text">История</p>
          <div className="history-item-container">
            {orders.map((item) => (
              <ItemHistoryProduct {...item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HistoryStore;
