import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AdminPage({ onAddMember, addMemberMessage, onDeleteMember, onGetAllMembers, onGetAllVehicles, deleteMemberMessage }) {
  const [licensePlate, setLicensePlate] = useState('');
  const [memberType, setMemberTyoe] = useState('');
  const navigate = useNavigate();

  function handleSubmitAddMember(e) {
    e.preventDefault();
    onAddMember(licensePlate, memberType);
  }

  function handleSubmitDeleteMember(e) {
    e.preventDefault();
    onDeleteMember(licensePlate);
  }

  function handleGetAllVehicles(e) {
    e.preventDefault();
    onGetAllVehicles();
    navigate('/all-vehicles');
  }

  function handleGetAllMembers(e) {
    e.preventDefault();
    onGetAllMembers();
    navigate('/all-members');
  }


  return (
    <div> Admin Page
      <form onSubmit={handleSubmitAddMember}>
        <div>
          <label htmlFor="licensePlate">Enter your license plate: </label>
          <input
            id="licensePlate"
            type="text"
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='memberType'>Choose a member type: </label>
          <select 
            id="memberType" 
            name="memberType"
            value={memberType}
            onChange={(e) => setMemberTyoe(e.target.value)}
            required
          >
            <option value="">Select member type</option>
            <option value="YEARLY">Yearly</option>
            <option value="MONTHLY">Monthly</option>
            <option value="WEEKLY">Weekly</option>
          </select>
        </div>
        <button type="submit">Add Member</button>
      </form>
      {addMemberMessage && <p>{addMemberMessage}</p>}

      <form onSubmit={handleSubmitDeleteMember}>
        <div>
          <label htmlFor="licensePlate">Enter your license plate: </label>
          <input
            id="deleteLicensePlate"
            type="text"
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Delete Member</button>
        {deleteMemberMessage && <p>{deleteMemberMessage}</p>}
      </form>
      <button onClick={handleGetAllVehicles}>Fetch All Vehicles</button>
      <button onClick={handleGetAllMembers}>Fetch All Members</button>
    </div>
  )
}

export default AdminPage