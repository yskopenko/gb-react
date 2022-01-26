import React from 'react';
import propTypes from "prop-types";

export const Message = (props) => {
    
    return (<div>
         [{props.author}]: {props.text}
         </div>
         );
    };

Message.propTypes = {
    author: propTypes.string,
    text: propTypes.string
};