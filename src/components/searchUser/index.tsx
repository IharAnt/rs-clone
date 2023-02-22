import React, { useEffect, useState } from 'react';
import { useDebaunce } from '../../hooks/debounce';
import { useAppDispatch } from '../../store';
import { searchChange } from '../../store/ratingStore/sliceRating/slice';
import './index.css';

const SearchUser = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const debounced = useDebaunce(search);

  useEffect(() => {
    dispatch(searchChange(debounced));
  }, [debounced, dispatch]);

  return (
    <div className="search-form">
      <input
        className="search-user_input"
        type="text"
        value={search}
        placeholder="Поиск участника"
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      {search && <div className="search-user_reser" onClick={() => setSearch('')}></div>}
    </div>
  );
};

export default SearchUser;
