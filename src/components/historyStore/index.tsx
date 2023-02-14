import { useState } from 'react';

import './index.css';

interface IBasketOpen {
    setActive: boolean
}

const HistoryStore = ({ setActive }: IBasketOpen) => {




    return (
        <div className={`main-field-history ${setActive ? 'main-field-history_open' : ''}`}>
            <p className='basket-title-text'>История</p>
        </div>

    );
};

export default HistoryStore;
