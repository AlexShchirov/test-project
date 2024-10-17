import { ChangeEvent, useState } from "react";
import usersData from "./users.json";
import { Card, ListGroup, ListGroupItem, TextInput } from "flowbite-react";

type UserType = {
  name: string;
  age: number;
  city: string;
};

export const UserList = () => {
  const [userItem, setUserItem] = useState("");
  const filteredUsers = usersData.filter((u) => u.name.toLowerCase().startsWith(userItem.toLowerCase()));
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserItem(e.target.value);
  };

  return (
    <Card className="user-list-container">
      <h3 className="user-list-title">User List</h3>
      <TextInput type="text" placeholder="Search by name" onChange={onChangeHandler} className="user-list-input" />
      <ListGroup>
        {filteredUsers.map((user: UserType) => (
          <ListGroupItem key={user.name} className="user-list-item">
            <span>{user.name}</span>, {user.age}, {user.city}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Card>
  );
};
