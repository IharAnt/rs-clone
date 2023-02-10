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

const RatingPage = () => {

  const { page, limit, sort, order } = useAppSelector(state => state.ratingPage);
  const [ratingArr, setrattingArr] = useState<IPaginationResponse<IRating>>({ count: 0, items: [], limit, page });
  const zapr = `запрос: sort=${sort}, limit=${limit}, order=${order}`;

  useEffect(() => {
    const getRattingArr = async () => {
      const responceArr = await new RatingService().getRating(page, limit, sort, order);
      setrattingArr(responceArr)
    }
    getRattingArr()
  }, [page, limit, sort, order])

  return (
    <MainLayout>
      <div className='rating-container'>

        <div className='rating-strip'>
          <h1 className='rating-title'>Рейтинг игроков</h1>
          <div className='rating-title_menu'>
            <ChangelimitUser />
            <SearchUser />
          </div>

        </div>
        <div className='rating-quantily-member'>
          <p>{`Всего участников: ${ratingArr.count}`}</p>
          <p>{zapr}</p>
        </div>
        { }
        <TableRatingTitle />
        {ratingArr.items.map((userItem) => { return <ItemUserRating {...userItem} /> })}
      </div>
    </MainLayout >
  );
};

export default RatingPage;
