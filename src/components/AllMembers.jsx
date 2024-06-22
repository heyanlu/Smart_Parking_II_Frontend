import React, { useState, useEffect } from 'react';
import { fetchAllMembers } from '../services';

import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";


function AllMembers() {
  const [members, setMembers] = useState([]);
  const theme = useTheme();


  useEffect(() => {
    fetchAllMembers()
      .then(data => {
        setMembers(data); 
      })
      .catch(error => {
        console.error('Failed to fetch members:', error);
      });
  }, []);

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h5" sx={{ color: theme.palette.text.primary }}>All Members: </Typography>
      <List>
        {members.map(member => (
          <ListItem key={member.id} >
            <ListItemText
              primary={`License Plate: ${member.licensePlate}`}
              secondary={`Member Type: ${member.memberType}, Member End Time: ${formatDate(member.memberEndTime)}`}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'auto 1fr' },
                gap: 1,
                alignItems: 'center', 
              }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default AllMembers;
