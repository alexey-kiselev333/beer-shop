import React, { useState } from "react";



const options = [10, 20, 30, 40, 50];

const Pagination = ({ paginationHandler, currentPageHandler,lastPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const changeHandler = (e) => {
        paginationHandler(e);
    };

    const clickBack = () => {
        if (currentPage <= 1) {
            currentPageHandler(1);
        } else {
            setCurrentPage(currentPage - 1);
            currentPageHandler(currentPage - 1);
        }
    };

    const clickForward = () => {
        setCurrentPage(currentPage + 1);
        currentPageHandler(currentPage + 1);
    };

    return (
        <div >
            <p> Select page items q-ty</p>
            <select onChange={changeHandler} >
                {options.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
            <div >
                <button onClick={clickBack} disabled={currentPage===1}>
                    Back
                </button>
                <button onClick={clickForward} disabled={lastPage} >
                    Forward
                </button>
            </div>
        </div>
    );
};

export default Pagination;