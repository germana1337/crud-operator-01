import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import { useState } from "react";
// import Card from "../UI/Card";
// import classes from "./AddUser.module.css";
// import Button from "../UI/Button";

// const AddUser = (props) => {
//   const [enteredUserName, setEnteredUserName] = useState("");
//   // const [enteredLastName, setEnteredLastName] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
//   // const [enteredEmail, setEnteredEmail] = useState("");

//   const addUserHandler = (event) => {
//     event.preventDefault();
//     if (
//       enteredUserName.trim().length === 0 ||
//       enteredAge.trim().length === 0 ||
//     )
//     {
//       return;
//     }
//     if (+enteredAge < 18) {
//       return;
//     }
//     console.log(enteredAge, enteredUserName, );
//     setEnteredUserName("");
//     setEnteredAge("");
//     // setEnteredLastName("");
//     // setEnteredEmail("");
//   };

//   const usernameChangeHandler = (event) => {
//     setEnteredUserName(event.target.value);
//   };
//   // const lastNameChangeHandler = (event) => {
//   //   setEnteredLastName(event.target.value);
//   // };
//   // const emailChangeHandler = (event) => {
//   //   setEnteredEmail(event.target.value);
//   // };
//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };

//   return (
//     <Card className={classes.input}>
//       <form onSubmit={addUserHandler}>
//         <label htmlFor="username">Username</label>
//         <input
//           id="username"
//           type="text"
//           value={enteredUserName}
//           onChange={usernameChangeHandler}
//         ></input>

//         {/* <label htmlFor="lastname">Lastname</label>
//         <input
//           id="lastname"
//           type="text"
//           value={enteredLastName}
//           onChange={lastNameChangeHandler}
//         ></input> */}

//         {/* <label htmlFor="email">email</label>
//         <input
//           id="email"
//           type="email"
//           value={enteredEmail}
//           onChange={emailChangeHandler}
//         ></input> */}

//         <label htmlFor="age">age(Years)</label>
//         <input
//           id="age"
//           type="number"
//           value={enteredAge}
//           onChange={ageChangeHandler}
//         ></input>
//         <Button type="submit">Add User</Button>
//       </form>
//     </Card>
//   );
// };

// export default AddUser;
