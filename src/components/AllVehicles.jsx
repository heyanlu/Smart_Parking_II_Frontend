// AllVehicles.js
import React, { useState, useEffect } from 'react';
import { fetchAllVehicles } from '../services';

function AllVehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchAllVehicles()
      .then(data => {
        setVehicles(data); 
      })
      .catch(error => {
        console.error('Failed to fetch vehicles:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Vehicles</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            License Plate: {vehicle.licensePlate}, Parking Position: {vehicle.parkingPosition}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllVehicles;
