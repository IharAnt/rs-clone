import React, { useEffect, useState } from 'react';
import './index.css';

const ChangelimitUser = () => {

    const [limitUser, setLimitUser] = useState('10');

    useEffect(() => {
        console.log(limitUser)
    }, [limitUser])

    return (
        <select value={limitUser} onChange={(e) => setLimitUser(e.currentTarget.value)} className='select_limit'>
            <option value='10'>Показывать по 10</option>
            <option value='20'>Показывать по 20</option>
            <option value='30'>Показывать по 30</option>
            <option value='10000'>Показать всех</option>
        </select>
    )

};

export default ChangelimitUser;
