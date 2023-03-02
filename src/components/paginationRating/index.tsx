import { IPaginationResponse } from '../../types/interfaces/IPagination';
import { useEffect, useState } from 'react';
import { IRating } from '../../types/interfaces/IRating';
import './index.css';
import { useAppDispatch, useAppSelector } from '../../store';
import { pageChangeRating } from '../../store/ratingStore/sliceRating/slice';

const PaginationRating = (data: IPaginationResponse<IRating>) => {
  const [maxPage, setMaxPage] = useState(1);
  const { limit, page } = useAppSelector((state) => state.ratingPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setMaxPage(Math.max(1, Math.ceil(data.count / limit)));
  }, [data.count, limit]);

  return (
    <div className="pagination-rating-container">
      <p
        onClick={() => dispatch(pageChangeRating(page - 1))}
        className={`text-arrow-pagination ${page === 1 ? 'pointer-events-none' : ''}`}
      >
        ❮
      </p>
      <div className="pagination-item-container">
        {[...Array(maxPage)].map((elem, index) => {
          return (
            <li
              key={index}
              value={index + 1}
              onClick={(e) => dispatch(pageChangeRating(e.currentTarget.value))}
              className={`pagination-item ${page === index + 1 ? 'pagination-item_active' : ''}`}
            >
              {index + 1}
            </li>
          );
        })}
      </div>
      <p
        className={`text-arrow-pagination ${page === maxPage ? 'pointer-events-none' : ''}`}
        onClick={() => dispatch(pageChangeRating(page + 1))}
      >
        ❯
      </p>
    </div>
  );
};

export default PaginationRating;
