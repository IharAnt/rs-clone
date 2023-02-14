import { useState } from 'react';
import BasketStore from '../../components/basketStore';
import MainLayout from '../../layouts/main';
import basketIco from './../../assets/img/basketIco.png'
import './index.css';

const StorePage = () => {

    const [openBasket, setOpenBasket] = useState(false);


    const openBasketHandler = () => {
        openBasket ? setOpenBasket(false) : setOpenBasket(true);
    }

    return (
        <MainLayout>
            <div className='store-container'>
                <img
                    className='store-basket-ico'
                    onClick={openBasketHandler}
                    src={basketIco}
                    alt="basket ico"
                />
                <div className='store-container-shop'>
                    <div className='main-field-store'></div>
                    <div className='main-field-history'></div>
                </div>

                <BasketStore setActive={openBasket} />
            </div>
        </MainLayout >
    );
};

export default StorePage;
