import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Box,
  Button,
  Typography,
  Input,
  Select,
  Grid,
  MenuItem,
} from "@mui/material";

function AdminPage({
  onAddMember,
  addMemberMessage,
  onDeleteMember,
  onGetAllMembers,
  onGetAllVehicles,
  deleteMemberMessage,
}) {
  const [licensePlate, setLicensePlate] = useState("");
  const [memberType, setMemberType] = useState("");
  const [showAddMemberMessage, setShowAddMemberMessage] = useState(false);
  const [showDeleteMemberMessage, setShowDeleteMemberMessage] = useState(false);

  // const [currentAction, setCurrentAction] = useState("");

  const navigate = useNavigate();

  function handleSubmitAddMember(e) {
    e.preventDefault();
    onAddMember(licensePlate, memberType);
    setLicensePlate("");
    setMemberType("");
    setShowAddMemberMessage(true);
    setShowDeleteMemberMessage(false);
  }

  function handleSubmitDeleteMember(e) {
    e.preventDefault();
    onDeleteMember(licensePlate);
    setLicensePlate("");
    setShowDeleteMemberMessage(true);
    setShowAddMemberMessage(false);
  }

  function handleGetAllVehicles(e) {
    e.preventDefault();
    onGetAllVehicles();
    navigate("/all-vehicles");
  }

  function handleGetAllMembers(e) {
    e.preventDefault();
    onGetAllMembers();
    navigate("/all-members");
  }

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setShowAddMemberMessage(false);
    setShowDeleteMemberMessage(false);
  };

  return (
    <Box
      bgcolor={"Background.default"}
      color={"text.primary"}
      sx={{
        margin: {
          xs: 5,
          md: 15,
        },
      }}
      onClick={() => {
        setShowAddMemberMessage(false);
        setShowDeleteMemberMessage(false);
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleGetAllVehicles}
          >
            View All Vehicles
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleGetAllMembers}
          >
            View All Members
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Card
            sx={{
              p: 3,
              mb: 3,
              borderRadius: 5,
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.5)",
            }}
          >
            <form onSubmit={handleSubmitAddMember}>
              <label>Enter your license plate: </label>
              <Input
                fullWidth
                id="licensePlate"
                type="text"
                value={licensePlate}
                onChange={handleInputChange(setLicensePlate)}
                required
                sx={{ mb: 2 }}
              />
              <Select
                fullWidth
                id="memberType"
                name="memberType"
                value={memberType}
                onChange={handleInputChange(setMemberType)}
                displayEmpty
                required
                sx={{ mb: 2 }}
              >
                <MenuItem value="" disabled>
                  Select Member Type
                </MenuItem>
                <MenuItem value="YEARLY">Yearly</MenuItem>
                <MenuItem value="MONTHLY">Monthly</MenuItem>
                <MenuItem value="WEEKLY">Weekly</MenuItem>
              </Select>
              <Button variant="contained" color="primary" type="submit">
                Add Member
              </Button>
            </form>
            {showAddMemberMessage && (
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  backgroundColor: "#f0f0f0",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography variant="body1">{addMemberMessage}</Typography>
              </Box>
            )}
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card
            sx={{
              p: 3,
              mb: 3,
              borderRadius: 5,
              boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.5)",
            }}
          >
            <form onSubmit={handleSubmitDeleteMember}>
              <div>
                <label htmlFor="deleteLicensePlate">
                  Enter your license plate:{" "}
                </label>
                <Input
                  fullWidth
                  id="deleteLicensePlate"
                  type="text"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value)}
                  required
                  sx={{ mb: 2 }}
                />
              </div>
              <Button variant="contained" color="primary" type="submit">
                Delete Member
              </Button>
              {deleteMemberMessage && <p>{deleteMemberMessage}</p>}
            </form>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminPage;
