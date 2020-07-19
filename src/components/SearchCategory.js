import React ,{ useRef }from "react";
import './SearchCategory.css'

const SearchCategory = (props) => {
  const inputRef = useRef();
  return (
    <div>
      <div className="ui fluid search">
        <div className="ui icon input">
          <input className="prompt" type="text" ref= {inputRef} name="filterValue" 
          placeholder="Search Tweet..." />
          <span className="pointer" onClick={event => props.onchange(inputRef)}><i className="search icon"></i></span>  
        </div>
        <div className="results"></div>
      </div>
    </div>
  );
};

export default SearchCategory;
