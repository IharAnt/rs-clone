import React, { useState } from 'react';
import SLIDER_DATA from '../../data/dataSlider';
import arrow from './../../assets/img/arrow.png';

const Slider = () => {

    const [offset, setOffset] = useState(0);
    const WIDTH_SLIDER = 100;
    const MAX_OFFSET = -((SLIDER_DATA.length - 1) * WIDTH_SLIDER);

    const handlerLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + WIDTH_SLIDER;
            return Math.min(newOffset, 0);
        })
    }

    const handlerRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - WIDTH_SLIDER;
            return Math.max(newOffset, MAX_OFFSET);
        })
    }

    return (
        <div className='h-44 flex flex-col items-center justify-between'>
            <div className="flex items-center">
                <div
                    className={`duration-200 ${offset === 0 ? 'opacity-20' : 'opacity-50 cursor-pointer hover:opacity-100'}`}
                    onClick={handlerLeftArrowClick}>
                    <img src={arrow} alt="arrow left" />
                </div>
                <div className='w-full flex overflow-hidden mx-3'>
                    <div className='flex transition transform ease-in-out duration-700'
                        style={{
                            transform: `translateX(${offset}%)`,
                        }}>
                        {SLIDER_DATA.map((item, index) => {
                            return (
                                <div className='min-w-full max-w-full flex justify-between items-center' key={index}>
                                    <img className='w-32' src={item.img} alt="step item" />
                                    <span className='text-center text-lg text-indigo-800'>{item.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div
                    className={`duration-200 ${offset === MAX_OFFSET ? 'opacity-20' : 'opacity-50 cursor-pointer hover:opacity-100'}`}
                    onClick={handlerRightArrowClick}>
                    <img className='rotate-180' src={arrow} alt="arrow right" />
                </div>
            </div>
            <div className="w-20 flex justify-between">
                {SLIDER_DATA.map((item, index) => {
                    return (
                        <div id={String(index * WIDTH_SLIDER)}
                            key={index}
                            className={`duration-200 w-4 h-4 rounded-full bg-indigo-800
                            ${offset === ((-index * WIDTH_SLIDER)) ? 'opacity-100' : 'opacity-30 cursor-pointer hover:opacity-100'}`}
                            onClick={(e) => setOffset(-Number(e.currentTarget.id))}>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default Slider;
