import basketIco from './../../assets/img/basketIco.png';
import { useAppDispatch, useAppSelector } from '../../store';
import { useDrop } from 'react-dnd';
import { addProductBasket, openBasketWindow } from '../../store/storePage/sliceStore/slice';
import { IProduct } from '../../types/interfaces/IProduct';
import './index.css'

const ControlBasket = () => {

    const basketCount = useAppSelector(state => state.storePage.basketCount);
    const dispatch = useAppDispatch();
    const [{ isOver }, dropRef] = useDrop({
        accept: 'item-product_add',
        drop: (item: { product: IProduct }) => {
            dispatch(addProductBasket(item.product));
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

      return (
        <div className='title-container-store_control' ref={dropRef}>
            {basketCount > 0 && <p className='basket-quality'>{basketCount}</p>}
            <img
                className={`store-ico ${isOver ? 'store-ico_drop' : ''}`}
                onClick={() => dispatch(openBasketWindow(''))}
                src={basketIco}
                alt="basket ico"
            />
        </div>
    );
};

export default ControlBasket;
