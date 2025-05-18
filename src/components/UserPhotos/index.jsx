// components/UserPhotos/index.jsx
import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
import "./styles.css";

function UserPhotos({ setContext }) {
  const { userId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchModel(`/api/user/photosOfUser/${userId}`).then((data) => {
      if (data) setPhotos(data);
    });
    fetchModel(`/api/user/${userId}`).then((data) => {
      if (data) {
        setUser(data);
        setContext(`Photos of ${data.first_name} ${data.last_name}`);
      }
    });
  }, [userId, setContext]);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        User Photos
      </Typography>
      {photos.length === 0 ? (
        <Typography>No photos found for this user.</Typography>
      ) : (
        photos.map((photo) => (
          <Box key={photo._id} sx={{ mb: 4 }}>
            <img
              src={`/images/${photo.file_name}`}
              alt="User"
              className="photo-img"
            />
            <Typography variant="caption" display="block" gutterBottom>
              Taken on: {new Date(photo.date_time).toLocaleString()}
            </Typography>

            {photo.comments?.map((comment) => (
              <Box key={comment._id} sx={{ pl: 2 }}>
                <Typography variant="body2">
                  <strong>{comment.user.first_name}:</strong> {comment.comment}
                </Typography>
              </Box>
            ))}
          </Box>
        ))
      )}
    </Box>
  );
}

export default UserPhotos;
