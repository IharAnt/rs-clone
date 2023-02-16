import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { addProductBasket, deleteProductBasket } from '../../store/storePage/sliceStore/slice';
import { IProduct } from '../../types/interfaces/IProduct';
import { useDrag } from 'react-dnd';
import Modal from '../modal';
import motikoin from './../../assets/img/motekoinIco.png'
import './index.css';

const ProductCard = (product: IProduct) => {

    const [{ isDragging }, dragRef] = useDrag({
        type: 'item-product_add',
        item: { product },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

     const [modalCardProduct, setModalCardProduct] = useState(false);
    const [IsButton, setIsButton] = useState(true);
    const dispatch = useAppDispatch();
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
            <div
                className={`product-card-container ${isDragging ? 'product-card-container_drag' : ''}`}
                onClick={() => setModalCardProduct(true)}
                ref={dragRef}
            >
                <img className='product-card_img' src={product.thumbnail} alt="product img" />
                <p className='product-card-title_text'>{product.title}</p>
                <p className='product-card-description_text'>{product.description}</p>
                <div className='product-card-description_price'>
                    <p className='product-price_text'>{product.price}</p>
                    <img className='product-price_img' src={motikoin} alt="motikoin ico" />
                </div>
                <div className='product-button-container'>
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
                </div>
            </div>
            <Modal isOpen={modalCardProduct} setModal={setModalCardProduct} >
                <div className="div">fdsfsdf</div>
            </Modal>
        </>
    )
};

export default ProductCard;
