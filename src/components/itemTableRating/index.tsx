import React from "react";
import './index.css';
import { ITableRatingTitle } from "./types/types";

const ItemTableRating = ({ name, text, img }: ITableRatingTitle) => {

    return (
        <div className={`table-container_ico title-ico_${name}`}>
            <img className='w-full' src={img} alt={`${name} ico`} />
            <p className={`table-container_ico-text title-text_${name}`}>{text}</p>
        </div>
    );
};

export default ItemTableRating;
