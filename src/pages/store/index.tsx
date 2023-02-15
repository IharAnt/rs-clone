import { useEffect, useState } from 'react';
import BasketStore from '../../components/basketStore';
import HistoryStore from '../../components/historyStore';
import ProductCard from '../../components/productCard';
import MainLayout from '../../layouts/main';
import ShopService from '../../services/ShopService';
import { useAppSelector } from '../../store';
import { IProduct } from '../../types/interfaces/IProduct';
import basketIco from './../../assets/img/basketIco.png'
import historyIco from './../../assets/img/historyIco.png'
import './index.css';

const StorePage = () => {

    const [arrProducts, setArrProducts] = useState([] as IProduct[]);
    const basketCount = useAppSelector(state => state.storePage.basketCount);
    const [openBasket, setOpenBasket] = useState(false);
    const [openHistory, setOpenHistory] = useState(false);

    const openBasketHandler = () => {
        openBasket ? setOpenBasket(false) : setOpenBasket(true);
    }
    const openHistoryHandler = () => {
        openHistory ? setOpenHistory(false) : setOpenHistory(true);
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
            <div className='title-container-store'>
                <p className='title-container-store_text'>Магазин</p>
                <div className='title-container-store_control'>
                    {basketCount > 0 && <p className='basket-quality'>{basketCount}</p>}
                    <img
                        className='store-ico'
                        onClick={openHistoryHandler}
                        src={historyIco}
                        alt="history ico"
                    />
                    <img
                        className='store-ico'
                        onClick={openBasketHandler}
                        src={basketIco}
                        alt="basket ico"
                    />
                </div>
            </div>
            <div className='store-container'>
                <HistoryStore setActive={openHistory} />
                <div className='store-container-shop'>
                    <div className='main-field-store'>
                        {arrProducts.map((product) => {
                            return (
                                <ProductCard {...product} key={product.id} />
                            );
                        })}
                    </div>
                </div>
                <BasketStore setActive={openBasket} />
            </div>
        </MainLayout >
    );
};

export default StorePage;
