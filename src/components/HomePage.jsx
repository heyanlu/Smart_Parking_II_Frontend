import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../assets/images/background.png";

function HomePage() {
  return (
    <Box
      sx={{
        bgcolor: "rgba(207, 232, 252, 0.5)",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white",
        paddingTop: "20vh",
      }}
    >
      <Typography variant="h4" component="div" align="center">
        Welcome to Smart Parking
      </Typography>
    </Box>
  );
}

export default HomePage;
