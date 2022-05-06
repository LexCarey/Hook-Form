import React, {useState} from 'react'
import UserInput from './UserInput';
import DisplayForm from './DisplayForm';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const updateFirstName = (f) => {
        setFirstName(f);
    }

    const updateLastName = (l) => {
        setLastName(l);
    }

    const updateEmail = (e) => {
        setEmail(e);
    }

    const updatePass = (p) => {
        setPassword(p);
    }

    const updateConfirm = (c) => {
        setConfirmPassword(c);
    }

    const confirmMsg = () => {
        if (password != confirmPassword) {
            return "Password and confirm password must match."
        }
    }

    return (
        <div>
            <h1>Form</h1>
            <form>
                <UserInput label="First Name" update={updateFirstName} limit={2} />
                <UserInput label="Last Name" update={updateLastName} limit={2} />
                <UserInput label="Email" update={updateEmail} limit={5} />
                <UserInput label="Password" update={updatePass} limit={8} />
                <UserInput label="Confirm Password" update={updateConfirm} limit={8} />
                <p style={{color:"red"}}>{confirmMsg()}</p>
                <p>
                    <input type="submit" value="Create User" />
                </p>
                <br />
                <DisplayForm label="First Name" display={firstName} />
                <DisplayForm label="Last Name" display={lastName} />
                <DisplayForm label="Email" display={email} />
                <DisplayForm label="Password" display={password} />
                <DisplayForm label="Confirm Password" display={confirmPassword} />
            </form>
        </div>
    )
}

export default UserForm