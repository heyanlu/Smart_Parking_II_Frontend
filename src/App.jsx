import { useState, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
import { ThemeProvider } from '@mui/material/styles';

import { initialState, reducer } from "./reducer";
import { PAGES } from "./constants";
import { ACTIONS } from "./constants";
import theme from "./theme";

import HomePage from "./components/HomePage";
import AdminPage from "./components/AdminPage";
import CustomerPage from "./components/CustomerPage";
import Navbar from "./components/Navbar";
import AllMembers from "./components/AllMembers";
import AllVehicles from "./components/AllVehicles";

import "./App.css";
import {
  fetchParkVehicle,
  fetchPayVehicle,
  fetchLeaveVehicle,
  fetchAddMember,
  fetchDeleteMember,
  fetchAllMembers,
  fetchAllVehicles,
  fetchOccupiedPercentage,
} from "./services";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [parkedMessage, setParkedMessage] = useState("");
  const [payMessage, setPayMessage] = useState("");
  const [leaveMessage, setLeaveMessage] = useState("");

  const [addMemberMessage, setAddMemberMessage] = useState("");
  const [deleteMemberMessage, setDeleteMemberMessage] = useState("");

  const [allVehiclesMessage, setAllVehiclesMessage] = useState("");
  const [allMembersMessage, setAllMembersMessage] = useState("");
  const [occupiedPercentageMessage, setOccupiedPercentageMessage] = useState("");

  const [occupancy, setOccupancy] = useState(0);

  function onParkVehicle(licensePlate) {
    fetchParkVehicle(licensePlate)
      .then((data) => {
        if (data.message === "success") {
          setParkedMessage("Vehicle parked successfully");
        } else {
          setParkedMessage(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setParkedMessage("Failed to park the car");
      });
  }

  function onPayVehicle(licensePlate) {
    fetchPayVehicle(licensePlate)
      .then((data) => {
        console.log("Data from fetchParkVehicle:", data);

        if (data.status === "success") {
          setPayMessage(`Parking duration: ${data.duration}. 
          Parking fee: $${data.fee}. 
          ${data.message} 
          Please leave within 20 minutes`);
        } else {
          setPayMessage(data.message);
        }
      })
      .catch((err) => {
        console.log("onPayVehicle - error:", err);
        setPayMessage("Failed to pay parking fee");
      });
  }

  function onLeaveVehicle(licensePlate) {
    fetchLeaveVehicle(licensePlate)
      .then((data) => {
        console.log("Data from fetchLeaveVehicle:", data);
        if (data.status === "success") {
          setLeaveMessage(`${data.message} See you next time.`);
        } else {
          setLeaveMessage(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setLeaveMessage("Failed to pay parking fee");
      });
  }

  function onAddMember(licensePlate, memberType) {
    fetchAddMember(licensePlate, memberType)
      .then((data) => {
        if (data.status === "success") {
          const terminateDate = new Date(data.terminate);
          const formattedDate = terminateDate.toISOString().split("T")[0];
          setAddMemberMessage(
            `${data.message}. Membership ends on ${formattedDate}`
          );
        } else {
          setAddMemberMessage(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setAddMemberMessage("Fail to add member");
      });
  }

  function onDeleteMember(licensePlate) {
    fetchDeleteMember(licensePlate)
      .then((data) => {
        if (data.status === "success") {
          setDeleteMemberMessage(`${data.message}`);
        } else {
          setDeleteMemberMessage(data.message);
        }
      })
      .catch((err) => {
        setDeleteMemberMessage("Fail to delete member");
      });
  }

  function onGetAllVehicles() {
    fetchAllVehicles()
      .then((data) => {
        if (data.status === "success") {
          setAllVehiclesMessage(`${data.message}`);
        } else {
          setAllVehiclesMessage(data.message);
        }
      })
      .catch((err) => {
        setAllVehiclesMessage("No Vehicle.");
      });
  }

  function onGetAllMembers() {
    fetchAllMembers()
      .then((data) => {
        if (data.status === "success") {
          setAllMembersMessage(`${data.message}`);
        } else {
          setAllMembersMessage(data.message);
        }
      })
      .catch((err) => {
        setAllMembersMessage("No Vehicle.");
      });
  }


  function onGetOccupancy() {
    fetchOccupiedPercentage()
      .then((data) => {
        console.log("data: ", data);
        setOccupancy(data);
      })
      .catch((err) => {
        setAllMembersMessage("Error fetching occupied percentage");
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path={`/${PAGES.HOME}`} element={<HomePage />} />
            <Route
              path={`/${PAGES.CUSTOMER}`}
              element={
                <CustomerPage
                  onParkVehicle={onParkVehicle}
                  onPayVehicle={onPayVehicle}
                  onLeaveVehicle={onLeaveVehicle}
                  occupancy={occupancy}
                  onGetOccupancy={onGetOccupancy}
                  parkedMessage={parkedMessage}
                  payMessage={payMessage}
                  leaveMessage={leaveMessage}
                  occupiedPercentageMessage={occupiedPercentageMessage}                 />
              }
            />
            <Route
              path={`/${PAGES.ADMIN}`}
              element={
                <AdminPage
                  onAddMember={onAddMember}
                  onDeleteMember={onDeleteMember}
                  onGetAllMembers={onGetAllMembers}
                  onGetAllVehicles={onGetAllVehicles}
                  addMemberMessage={addMemberMessage}
                  deleteMemberMessage={deleteMemberMessage}
                />
              }
            />
            <Route path="/all-members" element={<AllMembers />} />
            <Route path="/all-vehicles" element={<AllVehicles />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
