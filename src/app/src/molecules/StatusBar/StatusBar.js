import React, { Component } from 'react';
import { StatusCell, StatusCellModifiers } from '../../atoms/StatusCell';


const StatusBar = ({width}) => (
    <div>
        <StatusCell modifiers={StatusCellModifiers.NeonGreen}>NORMAL</StatusCell>
        <StatusCell modifiers={StatusCellModifiers.Gray}></StatusCell>
        <StatusCell>https://luciansturiao.dev [+]</StatusCell>
        <StatusCell modifiers={StatusCellModifiers.NoText}>__________________</StatusCell>
        <StatusCell modifiers={StatusCellModifiers.Gray}>utf-8[unix]</StatusCell>
        <StatusCell modifiers={StatusCellModifiers.NeonGreen}>SOME DATA</StatusCell>
        <StatusCell modifiers={StatusCellModifiers.Gray}>☰</StatusCell>
        <StatusCell modifiers={StatusCellModifiers.NeonGreen}>FROM PAGE HERE</StatusCell>
    </div>
);
export default StatusBar;
