import { useAppDispatch } from '../../store';
import { addProductBasket } from '../../store/storePage/sliceStore/slice';
import basketAdd from './../../assets/img/basketAddIco.png';
import { IOrder } from '../../types/interfaces/IOrder';
import { useDrag } from 'react-dnd';
import './index.css';

const ItemHistoryProduct = (item: IOrder) => {

    const dispatch = useAppDispatch();
    const [{ isDragging }, dragRef] = useDrag({
        type: 'item-product_add',
        item: { product: item.product },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    return (
        <div className='item-history-container' ref={dragRef}>
            {!isDragging && <div className='item-history-control'>
                <img onClick={() => dispatch(addProductBasket(item.product))} className='item-control_plus' src={basketAdd} alt="basket plus" />
            </div>}
            {!isDragging && <p className='item-history-count'>{item.count}</p>}
            <img className='item-history-img' src={item.product.thumbnail} alt="item history img" />
            <p className='item-history-title'>{item.product.title}</p>
        </div>
    );
};

export default ItemHistoryProduct;
