import './index.css';
import { IImgAchievementItem } from './types/types';

const ImgAchievementItem = ({ width, img, control }: IImgAchievementItem) => {

    return (
        <div
            className='achievements-img-container'
            style={{
                width: `${width}px`
            }}>
            <img
                className='achievements-item_ico_dissable'
                src={img}
                alt={`ico_${img}`} />
            <img
                style={{
                    width: `${control}%`,
                }}
                className='achievements-item_ico_active'
                src={img}
                alt={`ico_${img}`} />
        </div>
    )
}

export default ImgAchievementItem;
