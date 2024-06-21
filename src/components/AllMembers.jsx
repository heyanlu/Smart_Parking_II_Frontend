// AllMembers.js
import React, { useState, useEffect } from 'react';
import { fetchAllMembers } from '../services';

function AllMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchAllMembers()
      .then(data => {
        setMembers(data); // Assuming data is an array of members
      })
      .catch(error => {
        console.error('Failed to fetch members:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Members</h2>
      <ul>
        {members.map(member => (
          <li key={member.id}>
            License Plate: {member.licensePlate}, Member Type: {member.memberType}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllMembers;
