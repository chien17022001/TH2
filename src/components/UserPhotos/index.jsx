import React, { useEffect } from "react";
import { Typography, Box, Divider } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import models from '../../modelData/models';
import "./styles.css";

function UserPhotos({ setContext }) {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  useEffect(() => {
    const user = models.userModel(userId);
    if (user) {
      setContext(`Photos of ${user.first_name} ${user.last_name}`);
    }
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
            {/* Additional photo comments and details */}
          </Box>
        ))
      )}
    </Box>
  );
}

export default UserPhotos;
