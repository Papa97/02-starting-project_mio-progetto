import React, {useState} from "react";

import Styles from './AddUser.module.css';

import ErrorModal from "../UI/ErrorModal";
import Card from '../UI/Card.js'
import Button from '../UI/Button.js'

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (e)=> {
        e.preventDefault();
        if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
            setError({
                title: 'Invalid iput',
                message: 'Plese enter a valid name and age (not a empty values).'
            })
            return;
        }

        if (enteredAge < 1 ) {
            setError({
                title: 'Invalid age',
                message: 'Plese enter a valid age ( greater than 0 ).'
            })
            return console.log('inserisci eta maggiore di 0');
        }
        console.log(enteredUsername ,enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
     }

     const errorHandler = () => {
        setError(null)
     }
    return(
    <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card>
            <form onSubmit={addUserHandler} action="">
                <div className={Styles.formElement}>
                    <label htmlFor="username">Username </label>
                    <input type="text" name="" value={enteredUsername} id="username" onChange={usernameChangeHandler} />
                </div>
                <div className={Styles.formElement}>
                    <label htmlFor="age">Age (Years) </label>
                    <input type="text" name="" value={enteredAge} id="age" onChange={ageChangeHandler}/>
                </div>
                <Button className={Styles.button} type={'submit'}>Add user</Button>
            </form>
        </Card>
    </div>
    );
};

export default AddUser;