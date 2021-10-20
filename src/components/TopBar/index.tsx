import React, { useEffect, useState } from 'react';
import './topBar.css';

import navBarGradiant from '../../assets/nav_bar.png';
import searchIcon from '../../assets/search.png';

type TopBarProps = {
    onSearch: (searchString: string) => void;
    searchValue?: string;
}

function TopBar(props:TopBarProps) {
    const {searchValue,onSearch} = props;
    const [searchString, setSearchString] = useState(searchValue || "");

    useEffect(()=>{
        if(searchString?.trim() === ''){
            onSearch(searchString);
        }
    },[searchString, onSearch])

    return (
        <div className="sticky z-10 nav-bar flex flex-row bg-transparent">
            <img src={navBarGradiant} alt="" className="absolute z-10 bg-transparent gradiant-image"/>
            <input
                placeholder="Search.."
                value={searchString}
                className="z-10 h-full w-11/12 ml-2 bg-transparent text-white text-xl outline-none"
                onChange={(e)=>setSearchString(e.target.value)}
            />
            <button
                className="z-10 w-1/12 h-full mr-2"
                onClick={()=>onSearch(searchString)}
            >
                <img src={searchIcon} alt="search" className="object-contain"/>
            </button>
        </div>
    )
}

export default React.memo(TopBar);
