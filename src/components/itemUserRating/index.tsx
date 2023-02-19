import { IRating } from '../../types/interfaces/IRating';
import './index.css';
import modalGold from './../../assets/img/goldMedal.png';
import silverMedal from './../../assets/img/silverMedal.png';
import bronzeMedal from './../../assets/img/bronzeMedal.png';
import { useAppSelector } from '../../store';

const ItemUserRating = (data: IRating) => {
    const { id } = useAppSelector(state => state.appState.profile)
  
    return (

        <div className={`table-container_item item-user ${id === data.id ? 'userId_active' : ''}`}>
            <div className='medal-container'>
                <p className='item-rating-user_text'>{data.place}
                    {data.place === 1 ? <img className='item-rating-user_medal' src={modalGold} alt='first place' /> : ''}
                    {data.place === 2 ? <img className='item-rating-user_medal' src={silverMedal} alt='second place' /> : ''}
                    {data.place === 3 ? <img className='item-rating-user_medal' src={bronzeMedal} alt='third place' /> : ''}
                </p>
            </div>
            <p className='item-rating-user_text'>{data.user.name}</p>
            <p className='item-rating-user_text'>{data.level}</p>
            <p className='item-rating-user_text'>{data.totalExperience}</p>
            <p className='item-rating-user_text'>{data.approvedTasks}</p>
            <p className='item-rating-user_text'>{data.achievements.length}</p>
        </div>
    );
};

export default ItemUserRating;
