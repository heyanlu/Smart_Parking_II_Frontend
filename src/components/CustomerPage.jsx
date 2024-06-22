import { Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../constants";

function CustomerPage({
  onParkVehicle,
  onPayVehicle,
  onLeaveVehicle,
  parkedMessage,
  payMessage,
  leaveMessage,
  occupancy,
  onGetOccupancy
}) {
  const [licensePlate, setLicensePlate] = useState("");

  

  function handleSubmitPark(e) {
    e.preventDefault();
    onParkVehicle(licensePlate);
  }

  function handleSubmitPay(e) {
    e.preventDefault();
    onPayVehicle(licensePlate);
  }

  function handleSubmitLeave(e) {
    e.preventDefault();
    onLeaveVehicle(licensePlate);
  }

  useEffect(() => {
    onGetOccupancy()
  }, [])

  return (
    <Container>
      <Container>
        <Typography variant="h6">Parking Lot Information</Typography>
        <Typography>
          Available percentage: {occupancy.toFixed(2)}% 
        </Typography>
        <Typography>Location: 000 Smart St, Parking City</Typography>
        <Typography>Parking rate:</Typography>
      </Container>
      <h2>Customer Page</h2>
      <form onSubmit={handleSubmitPark}>
        <label htmlFor="licensePlate">License Plate:</label>
        <input
          type="text"
          id="licensePlate"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          required
        />
        <button type="submit">Park Vehicle</button>
      </form>
      {parkedMessage && <p>{parkedMessage}</p>}

      <form onSubmit={handleSubmitPay}>
        <label htmlFor="payLicensePlate">Enter License Plate to Pay:</label>
        <input
          type="text"
          id="payLicensePlate"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          required
        />
        <button type="submit">Pay for Vehicle</button>
      </form>

      {payMessage && <p>{payMessage}</p>}

      <form onSubmit={handleSubmitLeave}>
        <label htmlFor="payLicensePlate">Enter License Plate to Leave:</label>
        <input
          type="text"
          id="payLicensePlate"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          required
        />
        <button type="submit">Pay for Vehicle</button>
      </form>

      {leaveMessage && <p>{leaveMessage}</p>}
    </Container>
  );
}

export default CustomerPage;
