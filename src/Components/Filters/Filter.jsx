import React from "react";


const Filter = function ({params,handleChange,name}) {

    return (
        <div className="filters mb-20 ">
            <div className="justify-center">{params.description}</div>
            <div className="search-block-filter">
            <input
                type={params.type}
                id={params.name}
                onChange={handleChange}
                name={name}
            />
            </div>
        </div>
    );
};

export default Filter;