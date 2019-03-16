import React from 'react';
import 'typeface-roboto-mono';

const cellStyle = {
    backgroundColor: 'black',
    heigth: '12px',
    color: 'white',
    fontFamily: "'Roboto Mono', monospace",
    fontSize: '14px'
}

const StatusCell = ({ children }) => (
    <div
        style={cellStyle} >
        {children}
    </div>
);

export default StatusCell;
