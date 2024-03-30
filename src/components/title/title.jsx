import React from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import './title.scss'

const Title = ({symbols1,symbols2,title,subtitle}) => {

    //DARKMODE CONFIG ==>
    const { darkMode} = useTheme();
    const titleBox = darkMode ? 'titleBox titleBox__darkmode' : 'titleBox';
    const symbol = darkMode ? 'symbol symbol__darkmode' : 'symbol';

    return (
        <div className={titleBox}>
            <span className={symbol}>{symbols1}</span>
            <h2>{title}</h2>
            <span className={symbol}>{symbols2}</span>
        </div>
    );
};

export default Title;