import React, {useState} from 'react'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <form>
                <p>
                    <label>First Name</label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </p>
                <p>
                    <label>Last Name</label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </p>
                <p>
                    <label>Email</label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </p>
                <p>
                    <label>Password</label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </p>
                <p>
                    <label>Confirm Password</label>
                    <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </p>
                <p>
                    <input type="submit" value="Create User" />
                </p>
            </form>
            <br />
            <p>Your Form Data</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default UserForm