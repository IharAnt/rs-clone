import React from 'react';
import { props } from './types';
import './style.css';

export default function MotivatorsTaskHeader({ title, icon }: props) {
  return (
    <div className="motivatorsCnt__taskHeader motivators-block">
      <div>{title}</div>
      <img src={icon} alt="icon" className="motivatorsCnt__taskHeaderIcon" />
    </div>
  );
}
