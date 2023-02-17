import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredLastName.trim().length === 0
    ) {
      setError({
        title: 'მოხდა შეცდომა',
        message: 'გთხოვთ შეიყვანოთ სწორად მონაცემები და არ დატოვოთ ველები ცარიელი'
      });
      return;
    }
    if (+enteredAge < 18) {
      setError({
        title: 'არასწორი ასაკი',
        message: '18 წელზე დაბლა მომხმარებლის რეგისტრაცია აკრძალულია'
      })
      return;
    }

    if (enteredLastName.trim().length < 4) {
      setError({
        title: 'მოხდა შეცდომა',
        message: 'გვარი უნდა იყოს 4 სიმბოლოზე მეტი'
      })
      return;
    }

    props.onAddUser(enteredUserName, enteredLastName, enteredEmail, enteredAge);

    setEnteredUserName("");
    setEnteredAge("");
    setEnteredLastName("");
    setEnteredEmail("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
     {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHandler}
          ></input>

          <label htmlFor="lastname">Lastname</label>
          <input
            id="lastname"
            type="text"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
          ></input>

          <label htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          ></input>

          <label htmlFor="age">age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
