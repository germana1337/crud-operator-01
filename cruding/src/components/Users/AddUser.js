import { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrappers";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const ageInputRef = useRef();
  const emailInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredUserEmail = emailInputRef.current.value;
    const enteredUserLastName = lastNameInputRef.current.value;
    event.preventDefault();
    if (
      enteredName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredUserEmail.trim().length === 0 ||
      enteredUserLastName.trim().length === 0
    ) {
      setError({
        title: "მოხდა შეცდომა",
        message:
          "გთხოვთ შეიყვანოთ სწორად მონაცემები და არ დატოვოთ ველები ცარიელი",
      });
      return;
    }
    if (+enteredUserAge < 18) {
      setError({
        title: "არასწორი ასაკი",
        message: "18 წელზე დაბლა მომხმარებლის რეგისტრაცია აკრძალულია",
      });
      return;
    }

    if (enteredUserLastName.trim().length < 4) {
      setError({
        title: "მოხდა შეცდომა",
        message: "გვარი უნდა იყოს 4 სიმბოლოზე მეტი",
      });
      return;
    }

    props.onAddUser(
      enteredName,
      enteredUserLastName,
      enteredUserEmail,
      enteredUserAge
    );
    nameInputRef.current.value = "";
    lastNameInputRef.current.value = "";
    emailInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>

          <label htmlFor="lastname">Lastname</label>
          <input id="lastname" type="text" ref={lastNameInputRef}></input>

          <label htmlFor="email">email</label>
          <input id="email" type="email" ref={emailInputRef}></input>

          <label htmlFor="age">age(Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
