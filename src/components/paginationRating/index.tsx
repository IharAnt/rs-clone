import { IPaginationResponse } from '../../types/interfaces/IPagination';
import { useEffect, useState } from 'react';
import { IRating } from '../../types/interfaces/IRating';
import './index.css';


const PaginationRating = (data: IPaginationResponse<IRating>) => {

    const [maxPage, setMaxPage] = useState(1);

    useEffect(() => {
        console.log(data.count, 'общее кол-во')
        console.log(data.limit, 'лимит')
        setMaxPage(Math.round((data.count / data.limit) + 1));
    }, [data.items])


    return (
        <div className="pagination-rating-container">
            <p>{maxPage}</p>
        </div>
    )
};

export default PaginationRating;
