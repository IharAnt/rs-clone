import { IProduct } from '../../types/interfaces/IProduct';
import ProductCartButton from '../productCartButton';
import motikoin from './../../assets/img/motekoinIco.png';
import './index.css';

const ModalProduct = (product: IProduct) => {

    return (
        <div className='modal-product-container'>
            <img className='modal-product-img' src={product.thumbnail} alt='product img' />
            <p className='modal-product-text modal-title'><span className='modal-product-text_bold'>Название: </span>{product.title}</p>
            <p className='modal-product-text'><span className='modal-product-text_bold'>Бренд: </span>{product.brand}</p>
            <p className='modal-product-text'><span className='modal-product-text_bold'>Категория: </span>{product.category}</p>
            <p className='modal-product-text'><span className='modal-product-text_bold'>Описание: </span>{product.description}</p>
            <div className='modal-product-text modal-product-price'>
                <span className='modal-product-text_bold'>Стоимость: </span>{product.price}
                <img className='modal-product-motikoin' src={motikoin} alt="motikoin ico" />
            </div>
            <ProductCartButton {...product} />
        </div>
    );
};

export default ModalProduct;
