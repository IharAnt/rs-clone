import MainLayout from '../../layouts/main';
import './index.css';
import TableRatingTitle from '../../components/tableRatingTitle';

const RatingPage = () => {

  const quantilyMember = 34;

  return (
    <MainLayout>
      <div className='rating-container'>
        <h1 className='rating-title'>Рейтинг игроков</h1>
        <div className='rating-strip'></div>
        <div className='rating-quantily-member'>
          <p>{`Всего участников: ${quantilyMember}`}</p>
        </div>
        <TableRatingTitle />
      </div>
    </MainLayout >
  );
};

export default RatingPage;
