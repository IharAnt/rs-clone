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
import loadingGif from './../../assets/img/loading.gif';

const RatingPage = () => {

  const { page, limit, sort, order, search } = useAppSelector(state => state.ratingPage);
  const [update, setUpdate] = useState(0);
  const [ratingArr, setrattingArr] = useState<IPaginationResponse<IRating>>({ count: 0, items: [], limit, page });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    const getRattingArr = async () => {
      const responceArr = await RatingService.getRating(page, limit, sort, order, search);
      setrattingArr(responceArr);
      setLoading(true);
    }
    getRattingArr()
  }, [page, limit, sort, order, update, search])

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
        </div>
        <TableRatingTitle />
        {!loading && <div className='rating-loading'>
            <img src={loadingGif} alt="loading gif" /></div>}
        <div className='container-table-rating_items'>
          
          {loading && ratingArr.items.map((userItem, index) => <ItemUserRating {...userItem} key={`userItem${index}`} />)}
        </div>
        < PaginationRating {...ratingArr} />
      </div>
    </MainLayout >
  );
};

export default RatingPage;
