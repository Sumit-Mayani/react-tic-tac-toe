import React from 'react'

const SqaureComponent = ({state,className, onClick,index}) => {

    //class props passing
    const classes = className ? `${className} square `: 'square';

    return (
        <span  className={classes + (state === "X" ? ` fc-aqua` : ` fc-white`)} onClick={() => onClick(index)}>
            {state}
        </span>
    )

}

export default SqaureComponent;