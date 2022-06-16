import React, { useState } from "react";
import './Search.css';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range";
import { Button } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { useHistory } from 'react-router-dom';




function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Number of guests <PeopleIcon />
            </h2>

            <div className="guestNumber">
                <input min={0} defaultValue={2} focused type="number" />
            </div>

            <Button onClick={() => history.push('/search')}>
                Search Airbnb
            </Button>
        </div>
    )
}

export default Search