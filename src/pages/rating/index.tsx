import MainLayout from '../../layouts/main';
import './index.css';
import TableRatingTitle from '../../components/tableRatingTitle';
import SearchUser from '../../components/searchUser';
import ChangelimitUser from '../../components/changeLimitUser';

const RatingPage = () => {

  const quantilyMember = 34;

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
          <p>{`Всего участников: ${quantilyMember}`}</p>
        </div>
        <TableRatingTitle />
      </div>
    </MainLayout >
  );
};

export default RatingPage;
