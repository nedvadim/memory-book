import React from 'react'
import {Alert} from "@material-ui/lab";
import {IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/core/SvgIcon/SvgIcon";

const Events = () => {
    return (
        <>
            <h1 className="MainHeadersMB">Events</h1>
            <Alert severity="warning" className="MainHeadersMB">You haven't any events in your memory book yet</Alert>
            <IconButton color="primary" aria-label="Add event" component="span">
                <AddIcon />
            </IconButton>
        </>
    )
};

export default Events;
