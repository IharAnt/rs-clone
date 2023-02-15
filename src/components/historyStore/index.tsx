import { useAppSelector } from '../../store';

import './index.css';

const HistoryStore = () => {
    const { IsHistoryOpen } = useAppSelector(state => state.storePage);

    return (
        <div className={`main-field-history ${IsHistoryOpen ? 'main-field-history_open' : ''}`}>
            <p className='basket-title-text'>История</p>
        </div>

    );
};

export default HistoryStore;
