import { useAppDispatch, useAppSelector } from '../../store';
import { useDrop } from 'react-dnd';
import './index.css';
import { addProductBasket } from '../../store/storePage/sliceStore/slice';
import { IProduct } from '../../types/interfaces/IProduct';
import BasketTitle from '../basketTitle';
import BasketBuyButton from '../basketBuyButton';
import ItemBasketProduct from '../itemBasketProduct';

const BasketStore = () => {
  const { basketProducts, IsBasketOpen } = useAppSelector((state) => state.storePage);
  const IsLogin = useAppSelector((state) => state.appState.isLogin);
  const dispatch = useAppDispatch();
  const [{ isOver }, dropRef] = useDrop({
    accept: 'item-product_add',
    drop: (item: { product: IProduct }) => {
      dispatch(addProductBasket(item.product));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <>
      {IsLogin && (
        <div className={`main-field-basket ${IsBasketOpen ? 'main-field-basket_open' : ''}`} ref={dropRef}>
          <BasketTitle />
          <div className={`basket-list-product ${isOver ? 'basket-list-product_drop' : ''}`}>
            {basketProducts.map((item) => (
              <ItemBasketProduct {...item} key={item.product.id} />
            ))}
          </div>
          <BasketBuyButton />
        </div>
      )}
    </>
  );
};

export default BasketStore;
