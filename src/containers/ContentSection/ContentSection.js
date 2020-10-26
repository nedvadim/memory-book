import React from "react";
import classes from './ContentSection.module.css'
const ContentSection = (props) => {
    return (
        <div className={classes.wrapper}>{props.children}</div>
    )
};

export default ContentSection;
