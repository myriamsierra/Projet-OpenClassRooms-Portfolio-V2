import React from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import './filter.scss';

const Filters = ({ tag, onClick, active }) => {
    
    // DARKMODE THEME ==>
    const { darkMode } = useTheme();
    const tags = darkMode ? 'tag tag__darkmode' : 'tag';

    // FILTER CONFIG ==>
    const filter = `filter ${active ? 'active' : ''}`;

    return (
        <div className={filter} onClick={() => onClick(tag)}> {/* Modifiez cette ligne */}
            <p className={tags}>{tag}</p>
        </div>
    );
};

export default Filters;
