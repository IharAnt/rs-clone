import './index.css';
import ItemTableRating from "../itemTableRating";
import dataTableRatingTitle from "../../data/dataTableRatingTitle";

const TableRatingTitle = () => {

  return (
    <div className='table-container_item'>
      {dataTableRatingTitle.map((item) => {
        return (
          <ItemTableRating key={item.name} {...item} />
        )
      }
      )}
    </div>
  );
};

export default TableRatingTitle;
