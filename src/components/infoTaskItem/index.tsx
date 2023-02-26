import React from 'react';
import { props } from './types';

export default function InfoTaskItem({ title, valueNode }: props) {
  return (
    <div className="infoTask__field">
      <div className="infoTask__fieldName">
        <div className="infoTask__fieldNameText">{title}</div>
      </div>
      <div className="infoTask__fieldValue">{valueNode}</div>
    </div>
  );
}
