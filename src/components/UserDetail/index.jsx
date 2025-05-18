import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";
import fetchModel from "../../lib/fetchModelData";

function UserDetail({ setContext }) {
  const { userId } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchModel(`/api/user/${userId}`).then(data => {
      if (data) {
        setUser(data);
        setContext(`${data.first_name} ${data.last_name}`);
      }
    });
  }, [userId, setContext]);

  if (!user) {
    return (
      <Typography variant="body1" sx={{ margin: 2 }}>
        Đang tải thông tin người dùng...
      </Typography>
    );
  }

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="body1"><strong>Địa điểm:</strong> {user.location}</Typography>
        <Typography variant="body1"><strong>Nghề nghiệp:</strong> {user.occupation}</Typography>
        <Typography variant="body1"><strong>Giới thiệu:</strong> {user.description}</Typography>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/photos/${user._id}`}
          sx={{ marginTop: 2 }}
        >
          Xem ảnh của {user.first_name}
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserDetail;
