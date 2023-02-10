import React from "react";
import './index.css';
import ItemTableRating from "../itemTableRating";
import dataTableRatingTitle from "../../data/dataTableRatingTitle";

const TableRatingTitle = () => {

  return (
    <div className='table-container_item'>
      {dataTableRatingTitle.map((item) => {
        return (
          <ItemTableRating key={item.name} name={item.name} img={item.img} text={item.text} />
        )
      }
      )}
    </div>
  );
};

export default TableRatingTitle;
