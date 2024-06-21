import React, { useState } from 'react';

function CustomerPage({ onParkVehicle, onPayVehicle, onLeaveVehicle, parkedMessage, payMessage, leaveMessage }) {
  const [licensePlate, setLicensePlate] = useState('');

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


    return (
        <div>
        <h2>Customer Page</h2>
        <form 
        onSubmit={handleSubmitPark}
        >
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
        
        </div>
    );
}

export default CustomerPage;
