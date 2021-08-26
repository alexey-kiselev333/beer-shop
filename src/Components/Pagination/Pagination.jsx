import React, { useState } from "react";
import {Button, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {classes} from "istanbul-lib-coverage";



const options = [10, 20, 30, 40, 50];

const Pagination = ({ paginationHandler, currentPageHandler,lastPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const changeHandler = (e) => {
        paginationHandler(e);
    };

    const clickPrevPage = () => {
        if (currentPage <= 1) {
            currentPageHandler(1);
        } else {
            setCurrentPage(currentPage - 1);
            currentPageHandler(currentPage - 1);
        }
    };

    const clickNextPage = () => {
        setCurrentPage(currentPage + 1);
        currentPageHandler(currentPage + 1);
    };

    return (
        <div className="d-flex">
            <div className="button-wrapper">
                <Button onClick={clickPrevPage} disabled={currentPage===1} variant="contained" color="secondary">
                    Back
                </Button>
            </div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">q-ty</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    onChange={changeHandler}
                    defaultValue={10}
                >
                    {options.map((item) => (
                        <MenuItem value={item} key={item}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>
                <div className="button-wrapper">
                    <Button onClick={clickNextPage} disabled={lastPage} variant="contained" color="secondary">
                        Next
                    </Button>
                </div>

        </div>
    );
};

export default Pagination;