import React, { useState,Fragment, useRef } from 'react';


const ListElement = props => {
    

    const toggleTaskState = (id) => {
        id=props.id
        props.changeState(id)
        console.log(props.state.completada)
    }

    return (
        <li>
            {props.desc}
            <input type="checkbox"  checked={props.state.completada} onChange={toggleTaskState} />
        </li>
        
    )
}

export default ListElement;