import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import models from '../../modelData/models';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userList = models.userListModel();
    setUsers(userList);
  }, []);

  return (
    <div>
      <List>
        {users.map((user) => (
          <ListItem
            button
            key={user._id}
            component={Link}
            to={`/users/${user._id}`}
          >
            <ListItemText primary={`${user.first_name} ${user.last_name}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default UserList;
