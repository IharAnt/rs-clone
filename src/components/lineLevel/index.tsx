import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store';
import './index.css';

const LineLevel = () => {

    const { totalExperience, nextLevelExperience } = useAppSelector(state => state.appState.profile);
    const [actualWidth, setActualWidth] = useState(0);

    useEffect((
        () => {
            const calcWidth = (totalExperience * 100) / nextLevelExperience;
            setActualWidth(calcWidth);
        }), [totalExperience, nextLevelExperience])

    return (
        <div className='level-line-container'>
            <div className='level-line-actual' style={{
                width: `${actualWidth}%`
            }}></div>
            <p className='level-line-text'>{totalExperience}\{nextLevelExperience}</p>
        </div>
    );
};

export default LineLevel;
