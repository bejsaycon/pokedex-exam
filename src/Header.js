import React, { useState } from 'react';
import { TbPokeball } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FaSort } from "react-icons/fa";

function Header() {
    const [searchText, setSearchText] = useState('');
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const searchHandler = (e) => {
        setSearchText(e.target.value);
    };

    const clearSearch = () => {
        setSearchText('');
    };

    const toggleFilterVisibility = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    return (
        <div className='header'>
            <div className="container">
                <div className="logo-wrapper">
                    <TbPokeball />
                    <h1>Pokedex</h1>
                </div>
                <div className="search-wrapper">
                    <div className="search-wrap">
                        <FaSearch
                            alt="search icon"
                            className="search-icon"
                        />
                        <input
                            type="text"
                            className="search-input body3-fonts"
                            placeholder="Search"
                            id="search-input"
                            value={searchText}
                            onChange={searchHandler}
                        />
                        <IoIosClose
                            alt="cross icon"
                            className={`search-close-icon ${searchText ? 'search-close-icon-visible' : ''}`}
                            id="search-close-icon"
                            onClick={clearSearch}
                        />
                    </div>
                    <div className="sort-wrapper">
                        <div className="sort-wrap" onClick={toggleFilterVisibility}>
                            <FaSort
                                alt="sorting"
                                className="sort-icon"
                                id="sort-icon"
                            />
                        </div>
                        <div className={`filter-wrapper ${isFilterVisible ? 'filter-wrapper-open' : ''}`}>
                            <p className="body2-fonts">Sort by:</p>
                            <div className="filter-wrap">
                                <div>
                                    <input
                                        type="radio"
                                        id="number"
                                        name="filters"
                                        value="number"
                                        defaultChecked
                                    />
                                    <label htmlFor="number" className="body3-fonts">Number</label>
                                </div>
                                <div>
                                    <input type="radio" id="name" name="filters" value="name" />
                                    <label htmlFor="name" className="body3-fonts">Name</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;