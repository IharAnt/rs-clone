import React, { useEffect, useState } from 'react';
import { useDebaunce } from '../../hooks/debounce';
import './index.css';
import { useAppDispatch } from '../../store';
import { authChange } from '../../store/appStore/sliceApp/slice';


const SearchUser = () => {
    const [search, serSearch] = useState('')
    // const distatch = useAppDispatch();
    const debounced = useDebaunce(search);
    useEffect(() => {
        console.log(debounced)
    }, [debounced])

    return (
        <div className="search-form">
            <input
                className='search-user_input'
                type="text"
                value={search}
                placeholder='Поиск участника'
                onChange={(e) => serSearch(e.currentTarget.value)} />
            {search && <div className='search-user_reser' onClick={() => serSearch('')}></div>}
        </div>
    )
};

export default SearchUser;
