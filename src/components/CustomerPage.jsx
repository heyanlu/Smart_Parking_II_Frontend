import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Input, Button } from "@mui/material";

import "./CustomerPage.css";

const MessageDisplay = ({ showMessage, message }) => {
  const theme = useTheme();
  if (!showMessage) return null;

  return (
    <Box
      sx={{
        mt: 2,
        p: 2,
        backgroundColor: "#f0f0f0",
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body1">{message}</Typography>
    </Box>
  );
};

function CustomerPage({
  onParkVehicle,
  onPayVehicle,
  onLeaveVehicle,
  onGetOccupancy,
  parkMessage,
  payMessage,
  leaveMessage,
  occupancy,
}) {
  const [licensePlate, setLicensePlate] = useState("");
  const [currentAction, setCurrentAction] = useState("");
  const [showParkVehicleMessage, setShowAParkVehicleMessage] = useState(false);
  const [showPayVehicleMessage, setShowPayVehicleMessage] = useState(false);
  const [showLeaveVehicleMessage, setShowLeaveVehicleMessage] = useState(false);


  const theme = useTheme();
  const barWidth = `${occupancy}%`;

  const handleActionSubmit = (e) => {
    e.preventDefault();
    switch (currentAction) {
      case "park":
        onParkVehicle(licensePlate);
        setShowAParkVehicleMessage(true);
        setShowPayVehicleMessage(false);
        setShowLeaveVehicleMessage(false);
        break;
      case "pay":
        onPayVehicle(licensePlate);
        setShowPayVehicleMessage(true);
        setShowAParkVehicleMessage(false);
        setShowLeaveVehicleMessage(false);
        break;
      case "leave":
        onLeaveVehicle(licensePlate);
        setShowLeaveVehicleMessage(true);
        setShowPayVehicleMessage(false);
        setShowAParkVehicleMessage(false);
        break;
      default:
        break;
    }
  };

  const handleActionChange = (action) => {
    setCurrentAction(action);
  };

  useEffect(() => {
    onGetOccupancy();
  }, []);

  return (
    <div className="customer-container">
      <Box
        bgcolor={theme.palette.background.default}
        color={theme.palette.text.primary}
        height="100%"
        width="100%"
        my={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        margin={5}
        sx={{
          borderRadius: 5,
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.5)",
          border: `1px solid ${theme.palette.mode === 'light' ? theme.palette.divider : theme.palette.divider}`
        }}
        onClick={() => {
          setShowAParkVehicleMessage(false);
          setShowPayVehicleMessage(false);
          setShowLeaveVehicleMessage(false);
        }}
      >
        <Box
          height={30}
          width="100%"
          bgcolor={theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.light}
          sx={{
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        ></Box>

        {/* parking lot information */}
        <Typography variant="h6">Parking Lot Information</Typography>
        <div className="percentage-bar-container">
          <Typography>Occupied percentage: {occupancy.toFixed(2)}%</Typography>
          <div className="percentage-bar">
            <div
              className="percentage-bar-fill"
              style={{ width: barWidth }}
            ></div>
          </div>
        </div>
        <Typography>Address: 000 Smart St, Parking City</Typography>
        <Typography>Rate: $5 / hour</Typography>

        {/* service part */}
        <div className="service-container">
          <Typography variant="h6">Choose a service: </Typography>
          <form onSubmit={handleActionSubmit}>
            <label htmlFor="licensePlate"></label>
            <Input
              fullWidth
              variant="outlined"
              color="primary"
              type="text"
              placeholder="Enter license plate"
              id="licensePlate"
              value={licensePlate}
              onChange={(e) => setLicensePlate(e.target.value)}
              required
              style={{ marginBottom: "10px" }}
            />
            <div className="button-container">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => handleActionChange("park")}
              >
                Park
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => handleActionChange("pay")}
              >
                Pay
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => handleActionChange("leave")}
              >
                Leave
              </Button>
            </div>
          </form>
          <div className="message-container" mt={2}>
            <MessageDisplay
              showMessage={showParkVehicleMessage && currentAction === "park"}
              message={parkMessage}
            />
            <MessageDisplay
              showMessage={showPayVehicleMessage && currentAction === "pay"}
              message={payMessage}
            />
            <MessageDisplay
              showMessage={showLeaveVehicleMessage && currentAction === "leave"}
              message={leaveMessage}
            />
          </div>
        </div>
      </Box>
    </div>
  );
}

export default CustomerPage;
