import { useAppDispatch, useAppSelector } from '../../store';
import { limitChange, pageChangeRating } from '../../store/ratingStore/sliceRating/slice';
import './index.css';

const ChangelimitUser = () => {

    const limitUser = useAppSelector(state => state.ratingPage.limit);
    const dispatch = useAppDispatch();

    const onChangePageRating = (value: number) => {
        dispatch(pageChangeRating(1))
        dispatch(limitChange(value))
    }

    return (
        <select value={limitUser} onChange={(e) => onChangePageRating(Number(e.currentTarget.value))} className='select_limit'>
            <option value={5}>Показывать по 5</option>
            <option value={10}>Показывать по 10</option>
            <option value={20}>Показывать по 20</option>
            <option value={30}>Показывать по 30</option>
            <option value={10000}>Показать всех</option>
        </select>
    )

};

export default ChangelimitUser;
