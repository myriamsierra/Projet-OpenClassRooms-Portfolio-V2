    //-------------------FUNCTION---------------------------------
    import { useState } from 'react';
    import { useEffect } from 'react';


    //SET-UNSET DARKMODE==>
    const DarkMode = (darkMode) => {
        useEffect(() => {
            document.body.classList.toggle('body-dark-mode', darkMode);
        }, [darkMode]);
    };

    // FILTER FONTION ==>
    const FilterFunction = (initialData) => {
        const [activeTags, setActiveTags] = useState(["Tous"]);
        const [filteredData, setFilteredData] = useState(initialData);
    
        const handleTagClick = (tag) => {
            setActiveTags([tag]);
    
            if (tag === "Tous") {
                setFilteredData(initialData); 
            } else {
                const filtered = initialData.filter(project => project.tag && project.tag.includes(tag));
                setFilteredData(filtered);
            }
        };
    
        return { activeTags, filteredData, handleTagClick };
    };

export { DarkMode, FilterFunction};