import MainLayout from '../../layouts/main';
import './index.css';
import TableRatingTitle from '../../components/tableRatingTitle';
import SearchUser from '../../components/searchUser';
import ChangelimitUser from '../../components/changeLimitUser';
import RatingService from '../../services/RatingService';
import { useEffect, useState } from 'react';
import { IRating } from '../../types/interfaces/IRating';
import { IPaginationResponse } from '../../types/interfaces/IPagination';
import { useAppSelector } from '../../store';
import ItemUserRating from '../../components/itemUserRating';
import PaginationRating from '../../components/paginationRating';

const RatingPage = () => {

  const { page, limit, sort, order } = useAppSelector(state => state.ratingPage);
  const [update, setUpdate] = useState(0);
  const [ratingArr, setrattingArr] = useState<IPaginationResponse<IRating>>({ count: 0, items: [], limit, page });
  const zapr = `запрос: page=${page} sort=${sort}, limit=${limit}, order=${order}`; //удалить потом

  useEffect(() => {
    const getRattingArr = async () => {
      const responceArr = await new RatingService().getRating(page, limit, sort, order);
      setrattingArr(responceArr)
    }
    getRattingArr()
  }, [page, limit, sort, order, update])

  return (
    <MainLayout>
      <div className='rating-container'>
        <div className='rating-strip'>
          <div className='rating-title_container'>
            <h1 className='rating-title'>Рейтинг игроков</h1>
            <div className='rating-title-update' onClick={() => setUpdate(update + 1)}></div>
          </div>
          <div className='rating-title_menu'>
            <ChangelimitUser />
            <SearchUser />
          </div>
        </div>
        <div className='rating-quantily-member'>
          <p className='rating-quantily-member_text'>{`Всего участников: ${ratingArr.count}`}</p>
          <p>{zapr}</p>
        </div>
        <TableRatingTitle />
        <div className='container-table-rating_items'>
          {ratingArr.items.map((userItem, index) => { return <ItemUserRating {...userItem} key={`userItem${index}`} /> })}
        </div>
        < PaginationRating {...ratingArr} />
      </div>
    </MainLayout >
  );
};

export default RatingPage;
