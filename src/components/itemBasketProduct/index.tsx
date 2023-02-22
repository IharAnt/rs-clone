import motikoin from './../../assets/img/motekoinIco.png';
import basketPlus from './../../assets/img/basketPlusIco.png';
import basketMinus from './../../assets/img/basketMinusIco.png';
import basketDelete from './../../assets/img/basketDeleteIco.png';
import { ICartProduct } from '../../types/interfaces/IOrder';
import defaultImg from './../../assets/img/defaultImgProduct.png';
import { useDrag } from 'react-dnd';
import { deleteProductBasket, minusProductBasket, plusProductBasket } from '../../store/storePage/sliceStore/slice';
import { useAppDispatch } from '../../store';
import './index.css';
import { useDrop } from 'react-dnd';
import { useState } from 'react';

const ItemBasketProduct = (item: ICartProduct) => {
  const [imgProduct, setImgProduct] = useState(item.product.thumbnail);
  const dispatch = useAppDispatch();
  const [{ isDragging }, dragRefDelete] = useDrag({
    type: 'item-product_delete',
    item: { idProduct: item.product.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'item-product_delete',
    drop: (item: { idProduct: string }) => {
      dispatch(deleteProductBasket(item.idProduct));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div className={`basket-item-product ${isDragging ? 'basket-item-product_drag' : ''}`} ref={dragRefDelete}>
      {isDragging && <div className="drop-area-delete" ref={dropRef}></div>}
      {!isDragging && (
        <div className="basket-item-product_control">
          <img
            onClick={() => dispatch(plusProductBasket(item.product.id))}
            className="basket-control_button"
            src={basketPlus}
            alt="basket plus"
          />
          <img
            onClick={() => dispatch(minusProductBasket(item.product.id))}
            className="basket-control_button"
            src={basketMinus}
            alt="basket minus"
          />
          <img
            onClick={() => dispatch(deleteProductBasket(item.product.id))}
            className="basket-control_button"
            src={basketDelete}
            alt="basket delete"
          />
        </div>
      )}
      <img
        className="basket-item-product_img"
        src={imgProduct}
        alt="product img"
        onError={() => setImgProduct(defaultImg)}
      />
      <div className="basket-item-info">
        <p className="basket-item-product_title">{item.product.title}</p>
        <div className="w-full">
          <p className="basket-item-ico-text">Цена: {item.product.price}</p>
          <p className="basket-item-ico-text">Количество: {item.count}</p>
          <div className="basket-item-info-price">
            <p className="basket-item-ico-text">Итого: {item.count * item.product.price}</p>
            <img className="basket-item-ico" src={motikoin} alt="motikoin ico" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBasketProduct;
