import { IRating } from '../../types/interfaces/IRating';
import './index.css';

const ItemUserRating = (data: IRating) => {

    return (
        <div className='table-container_item item-user'>
            <p className='item-rating-user_text'>{data.place}</p>
            <p className='item-rating-user_text'>{data.user.name}</p>
            <p className='item-rating-user_text'>{data.level}</p>
            <p className='item-rating-user_text'>{data.totalExperience}</p>
            <p className='item-rating-user_text'>{data.approvedTasks}</p>
            <p className='item-rating-user_text'>{data.achievements.length}</p>
        </div>
    );
};

export default ItemUserRating;
