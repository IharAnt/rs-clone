import { IProduct } from '../../types/interfaces/IProduct';
import './index.css';

const ProductCard = (product: IProduct) => {

    return (
        <div className='product-card-container'>
            <p>{product.brand}</p>
        </div>
    )
};

export default ProductCard;
