import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            სახელი - {user.name} გვარი - {user.lastName} ელ-ფოსტა {user.email} ასაკი - ({user.age} წლის)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
