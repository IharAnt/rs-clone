import { useEffect, useState } from 'react';
import BasketStore from '../../components/basketStore';
import ProductCard from '../../components/productCard';
import MainLayout from '../../layouts/main';
import ShopService from '../../services/ShopService';
import { IProduct } from '../../types/interfaces/IProduct';
import basketIco from './../../assets/img/basketIco.png'
import './index.css';

const StorePage = () => {


    const [arrProducts, setArrProducts] = useState([] as IProduct[]);
    const [openBasket, setOpenBasket] = useState(false);
    const arr = [2, 3];
    const openBasketHandler = () => {
        openBasket ? setOpenBasket(false) : setOpenBasket(true);
    }

    useEffect((() => {
        const getProduct = async () => {
            const responce = await ShopService.getProducts();
            setArrProducts(responce)
        }

        getProduct();
    }), [])

    return (
        <MainLayout>
            <div className='store-container'>
                {arr.length > 0 && <p className='basket-quality'>{arr.length}</p>}
                <img
                    className='store-basket-ico'
                    onClick={openBasketHandler}
                    src={basketIco}
                    alt="basket ico"
                />
                <div className='store-container-shop'>
                    <div className='main-field-store'>
                        {arrProducts.map((product) => {
                            return (
                                <ProductCard {...product} key={product.id} />
                            );
                        })}
                    </div>
                    <div className='main-field-history'></div>
                </div>

                <BasketStore setActive={openBasket} />
            </div>
        </MainLayout >
    );
};

export default StorePage;
