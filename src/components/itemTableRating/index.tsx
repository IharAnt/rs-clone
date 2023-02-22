import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { orderChange, sortChange } from '../../store/ratingStore/sliceRating/slice';
import RatingSortType from '../../types/enums/RatingSortEnum';
import './index.css';
import { ITableRatingTitle } from './types/types';

const ItemTableRating = ({ name, text, img }: ITableRatingTitle) => {
  const dispatch = useAppDispatch();
  const { order, sort } = useAppSelector((state) => state.ratingPage);

  const handlerClickTitle = (value: string) => {
    if (value in RatingSortType) {
      dispatch(sortChange(value));
      if (order === 'asc') {
        dispatch(orderChange('desc'));
      } else {
        dispatch(orderChange('asc'));
      }
    }
  };

  return (
    <div
      id={name}
      onClick={(e) => handlerClickTitle(e.currentTarget.id)}
      className={`table-container_ico title-ico_${name}`}
    >
      <img className="w-full" src={img} alt={`${name} ico`} />
      <p className={`table-container_ico-text title-text_${name}`}>{text}</p>
      {order === 'asc' && name === sort ? <p className="order-text">↑</p> : ''}
      {order === 'desc' && name === sort ? <p className="order-text">↓</p> : ''}
    </div>
  );
};

export default ItemTableRating;
