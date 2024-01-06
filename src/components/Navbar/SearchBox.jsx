import React from "react";

const SearchBox = ({searchField, searchChange}) => {
    return (
      <div className="tc">
        <label htmlFor="search"></label>
        <input 
            className="pa3 br4 ba b--blue bg-lightest-blue" 
            name="search" 
            type="search" 
            placeholder="Search robots" 
            onChange={searchChange}    
            />
      </div>
    );

}

export default SearchBox;