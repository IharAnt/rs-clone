import { useAppDispatch, useAppSelector } from '../../store';
import { limitChange } from '../../store/ratingStore/sliceRating/slice';
import './index.css';

const ChangelimitUser = () => {

    const limitUser = useAppSelector(state => state.ratingPage.limit);
    const dispatch = useAppDispatch();
  
    return (
        <select value={limitUser} onChange={(e) => dispatch(limitChange(Number(e.currentTarget.value)))} className='select_limit'>
            <option value='10'>Показывать по 10</option>
            <option value='20'>Показывать по 20</option>
            <option value='30'>Показывать по 30</option>
            <option value='10000'>Показать всех</option>
        </select>
    )

};

export default ChangelimitUser;
