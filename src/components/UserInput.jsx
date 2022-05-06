import React, {useState} from 'react'

const UserInput = (props) => {
    const [input, setInput] = useState("");
    props.update(input)

    const formMessage = () => {
        if (input.length < props.limit && input) {
            return props.label + " must be atleast " + props.limit + " characters long."
        }
    }

    return (
        <div>
            <p>
                <label>{props.label}:</label>
                <input type="text" onChange={ (e) => setInput(e.target.value) }  />
            </p>
            <p style={{color:"red"}}>{formMessage()}</p>
        </div>
    )
}

export default UserInput