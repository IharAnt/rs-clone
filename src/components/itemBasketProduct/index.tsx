import motikoin from './../../assets/img/motekoinIco.png'
import basketPlus from './../../assets/img/basketAddIco.png';
import basketMinus from './../../assets/img/basketMinusIco.png';
import basketDelete from './../../assets/img/basketDeleteIco.png';
import { ICartProduct } from '../../types/interfaces/IOrder';
import { deleteProductBasket, minusProductBasket, plusProductBasket } from '../../store/storePage/sliceStore/slice';
import { useAppDispatch } from '../../store';
import './index.css';

const ItemBasketControl = (item: ICartProduct) => {

    const dispatch = useAppDispatch();

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
                    <p className='basket-item-ico-text'>Цена: {item.product.price}</p>
                    <p className='basket-item-ico-text'>Количество: {item.count}</p>
                    <div className='basket-item-info-price'>
                        <p className='basket-item-ico-text'>К оплате: {item.count * item.product.price}</p>
                        <img className='basket-item-ico' src={motikoin} alt="motikoin ico" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ItemBasketControl;
