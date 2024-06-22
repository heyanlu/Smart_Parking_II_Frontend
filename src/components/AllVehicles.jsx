// AllVehicles.js
import React, { useState, useEffect } from "react";
import { fetchAllVehicles } from "../services";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";

function AllVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const theme = useTheme();


  useEffect(() => {
    fetchAllVehicles()
      .then((data) => {
        setVehicles(data);
      })
      .catch((error) => {
        console.error("Failed to fetch vehicles:", error);
      });
  }, []);

  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h5" sx={{ color: theme.palette.text.primary }}>All Vehicles: </Typography>
      <List>
        {vehicles.map((vehicle) => (
          <ListItem key={vehicle.id} >
            <ListItemText
              primary={`License Plate: ${vehicle.licensePlate}`}
              secondary={`Parking Position: ${vehicle.parkingPosition}`}
              sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'auto 1fr' }, gap: 1, color: theme.palette.text.primary, }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default AllVehicles;
