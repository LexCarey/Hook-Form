import React, {useState} from 'react'

const displayForm = (props) => {
    return (
        <div>
            <p>{props.label}: {props.display}</p>
        </div>
    )
}

export default displayForm