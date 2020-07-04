import React from 'react';

import UserItem from './UserItem';
import Button from "../../shared/components/FormElements/Button"
import Card from '../../shared/components/UIElements/Card';
import './UsersList.css';

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
    <div className="center">
    <h1>Admin</h1>
    </div>
    <div className="center">
    <Button>Add Admin</Button>
    </div>
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
    </React.Fragment>
  );
};

export default UsersList;
