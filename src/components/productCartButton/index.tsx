import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { addProductBasket, deleteProductBasket } from '../../store/storePage/sliceStore/slice';
import { IProduct } from '../../types/interfaces/IProduct';

import './index.css';

const ProductCartButton = (product: IProduct) => {

    const [IsButton, setIsButton] = useState(true);
    const dispatch = useAppDispatch();
    const IsLogin = useAppSelector(state => state.appState.isLogin);
    const basketArrStore = useAppSelector(state => state.storePage.basketProducts);

    const clickBuyProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(addProductBasket(product));
    }

    const clickDeleteProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(deleteProductBasket(e.currentTarget.id));
    }

    useEffect((() => {
        setIsButton(true);
        if (basketArrStore.find((item) => item.product.id === product.id)) { setIsButton(false) }
    }), [basketArrStore, product.id])

    return (
        <>
            {IsLogin && <div className='product-button-container'>
                {IsButton ? <button
                    onClick={(e) => clickBuyProduct(e)}
                    className='product-card_button'>
                    Купить
                </button>
                    : <button
                        id={product.id}
                        onClick={(e) => clickDeleteProduct(e)}
                        className='product-card_button card-button_delete'>
                        Удалить
                    </button>
                }
            </div>}
        </>
    )
};

export default ProductCartButton;
