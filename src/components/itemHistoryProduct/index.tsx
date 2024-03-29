import { useAppDispatch } from '../../store';
import { addProductBasket } from '../../store/storePage/sliceStore/slice';
import basketAdd from './../../assets/img/basketAddIco.png';
import defaultImg from './../../assets/img/defaultImgProduct.png';
import { IOrder } from '../../types/interfaces/IOrder';
import { useDrag } from 'react-dnd';
import './index.css';
import { useState } from 'react';

const ItemHistoryProduct = (item: IOrder) => {
  const [imgProduct, setImgProduct] = useState(item.product.thumbnail);
  const dispatch = useAppDispatch();
  const [{ isDragging }, dragRef] = useDrag({
    type: 'item-product_add',
    item: { product: item.product },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div className="item-history-container" ref={dragRef}>
      {!isDragging && (
        <div className="item-history-control">
          <img
            onClick={() => dispatch(addProductBasket(item.product))}
            className="item-control_plus"
            src={basketAdd}
            alt="basket plus"
          />
        </div>
      )}
      {!isDragging && <p className="item-history-count">{item.count}</p>}
      <img
        className="item-history-img"
        src={imgProduct}
        alt="item history img"
        onError={() => setImgProduct(defaultImg)}
      />
      <p className="item-history-title">{item.product.title}</p>
    </div>
  );
};

export default ItemHistoryProduct;
