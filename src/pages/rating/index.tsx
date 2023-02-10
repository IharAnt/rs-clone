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

const RatingPage = () => {

  const { page, limit, sort, order } = useAppSelector(state => state.ratingPage);
  const [ratingArr, setrattingArr] = useState<IPaginationResponse<IRating>>({ count: 0, items: [], limit, page });

  useEffect(() => { getRattingArr() }, [page, limit, sort, order])

  const getRattingArr = async () => {
    console.log('запрос', sort, limit, order)
    const ratingArr = await new RatingService().getRating(1, limit, sort, order);
    setrattingArr(ratingArr)
  }

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
        </div>
        <TableRatingTitle />
        {ratingArr.items.map((user) => { return <li>{user.totalExperience}</li> })}
      </div>
    </MainLayout >
  );
};

export default RatingPage;
