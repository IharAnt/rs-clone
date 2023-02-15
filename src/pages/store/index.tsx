import { useEffect, useState } from 'react';
import BasketStore from '../../components/basketStore';
import ControlStore from '../../components/controlStore';
import HistoryStore from '../../components/historyStore';
import ProductCard from '../../components/productCard';
import MainLayout from '../../layouts/main';
import ShopService from '../../services/ShopService';
import { IProduct } from '../../types/interfaces/IProduct';
import './index.css';

const StorePage = () => {

    const [arrProducts, setArrProducts] = useState([] as IProduct[]);

    useEffect((() => {
        const getProduct = async () => {
            const responce = await ShopService.getProducts();
            setArrProducts(responce)
        }
        getProduct();
    }), [])

    return (
        <MainLayout>
            <div className='title-container-store'>
                <p className='title-container-store_text'>Магазин</p>
                <ControlStore />
            </div>
            <div className='store-container'>
                <HistoryStore />
                <div className='store-container-shop'>
                    <div className='main-field-store'>
                        {arrProducts.map((product) => {
                            return (
                                <ProductCard {...product} key={product.id} />
                            );
                        })}
                    </div>
                </div>
                <BasketStore />
            </div>
        </MainLayout >
    );
};

export default StorePage;
