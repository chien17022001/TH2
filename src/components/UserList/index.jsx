import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import models from '../../modelData/models';
import fetchModel from '../../lib/fetchModelData';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchModel('/api/user/list').then(data => {
      if (data) setUsers(data);
    });
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
            <ListItemText primary={`${user.last_name} ${user.first_name}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default UserList;
