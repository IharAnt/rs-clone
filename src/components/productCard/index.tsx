import { IProduct } from '../../types/interfaces/IProduct';
import './index.css';

const ProductCard = (product: IProduct) => {

    return (
        <div>
            <p>{product.brand}</p>
        </div>
    )
};

export default ProductCard;
