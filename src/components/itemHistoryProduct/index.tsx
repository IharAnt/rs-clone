import { useAppDispatch, useAppSelector } from '../../store';
import { deleteProductBasket, addProductBasket } from '../../store/storePage/sliceStore/slice';
import basketAdd from './../../assets/img/basketAddIco.png';
import basketDelete from './../../assets/img/basketDeleteHistoryIco.png';
import { IOrder } from '../../types/interfaces/IOrder';
import './index.css';
import { useEffect, useState } from 'react';

const ItemHistoryProduct = (item: IOrder) => {

    const dispatch = useAppDispatch();
    const [IsBasketProduct, setIsBasketProduct] = useState(true);
    const basketArrStore = useAppSelector(state => state.storePage.basketProducts);

    useEffect((() => {
        if (basketArrStore.find((product) => product.product.id === item.product.id)) {
            setIsBasketProduct(false);
        } else {
            setIsBasketProduct(true);
        }
    }), [basketArrStore]);

    return (
        <div className='item-history-container'>
            <div className='item-history-control'>
                {IsBasketProduct && <img onClick={() => dispatch(addProductBasket(item.product))} className='item-control_plus' src={basketAdd} alt="basket plus" />}
                {!IsBasketProduct && <img onClick={() => dispatch(deleteProductBasket(item.product.id))} className='item-control_plus' src={basketDelete} alt="basket plus" />}
            </div>
            <p className='item-history-count'>{item.count}</p>
            <img className='item-history-img' src={item.product.thumbnail} alt="item history img" />
            <p className='item-history-title'>{item.product.title}</p>
        </div>
    );
};

export default ItemHistoryProduct;
