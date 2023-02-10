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

  const limitUser = useAppSelector(state => state.ratingPage.limit);
  const [ratingArr, setrattingArr] = useState<IPaginationResponse<IRating>>({ count: 0, items: [], limit: limitUser, page: 0 });

  useEffect(() => { getRattingArr() }, [limitUser])

  const getRattingArr = async () => {
    console.log('запрос')
    const ratingArr = await new RatingService().getRating(1, limitUser);
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
        <p>{limitUser}</p>
        {ratingArr.items.map((user) => { return <li>{user.totalExperience}</li> })}
      </div>
    </MainLayout >
  );
};

export default RatingPage;
