import { useState } from 'react';
import { IProduct } from '../../types/interfaces/IProduct';
import Modal from '../modal';
import motikoin from './../../assets/img/motekoinIco.png'
import './index.css';

const ProductCard = (product: IProduct) => {

    const [modalCardProduct, setModalCardProduct] = useState(false);

    const clickBuyProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        console.log(e.currentTarget.id)
    }

    return (
        <>
            <div
                className='product-card-container'
                onClick={() => setModalCardProduct(true)}>
                <img className='product-card_img' src={product.thumbnail} alt="product img" />
                <p className='product-card-title_text'>{product.title}</p>
                <p className='product-card-description_text'>{product.description}</p>
                <div className='product-card-description_price'>
                    <p className='product-price_text'>{product.price}</p>
                    <img className='product-price_img' src={motikoin} alt="motikoin ico" />
                </div>
                <div className='product-button-container'>
                    <button
                        id={product.id}
                        onClick={(e) => clickBuyProduct(e)}
                        className='product-card_button'
                    >Купить</button>
                </div>

            </div>
            <Modal isOpen={modalCardProduct} setModal={setModalCardProduct} >
                <div className="div">fdsfsdf</div>
            </Modal>
        </>
    )
};

export default ProductCard;
