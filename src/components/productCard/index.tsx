import { useState } from 'react';
import { IProduct } from '../../types/interfaces/IProduct';
import { useDrag } from 'react-dnd';
import Modal from '../modal';
import motikoin from './../../assets/img/motekoinIco.png';
import './index.css';
import ProductCartButton from '../productCartButton';
import ModalProduct from '../modalProduct';
import defaultImg from './../../assets/img/defaultImgProduct.png';

const ProductCard = (product: IProduct) => {
  const [imgProduct, setImgProduct] = useState(product.thumbnail);
  const [{ isDragging }, dragRef] = useDrag({
    type: 'item-product_add',
    item: { product },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [modalCardProduct, setModalCardProduct] = useState(false);

  return (
    <>
      <div
        className={`product-card-container ${isDragging ? 'product-card-container_drag' : ''}`}
        onClick={() => setModalCardProduct(true)}
        ref={dragRef}
      >
        <img
          className="product-card_img"
          src={imgProduct}
          alt="product img"
          onError={() => setImgProduct(defaultImg)}
        />
        <p className="product-card-title_text">{product.title}</p>
        <p className="product-card-description_text">{product.description}</p>
        <div className="product-card-description_price">
          <p className="product-price_text">{product.price}</p>
          <img className="product-price_img" src={motikoin} alt="motikoin ico" />
        </div>
        <ProductCartButton {...product} />
      </div>
      <Modal isOpen={modalCardProduct} setModal={setModalCardProduct}>
        <ModalProduct {...product} />
      </Modal>
    </>
  );
};

export default ProductCard;
