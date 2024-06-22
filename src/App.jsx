import { useState, useReducer } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import { initialState, reducer } from "./reducer";
import { PAGES } from "./constants";
import { ACTIONS } from "./constants";
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
  const [occupancy, setOccupancy] = useState(0);

  //control theme
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  function onParkVehicle(licensePlate) {
    fetchParkVehicle(licensePlate)
      .then((data) => {
        dispatch({ type: ACTIONS.PARK_VEHICLE, payload: data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ACTIONS.PARK_VEHICLE, payload: data });
      });
  }

  function onPayVehicle(licensePlate) {
    fetchPayVehicle(licensePlate)
      .then((data) => {
        dispatch({ type: ACTIONS.PROCESS_TO_PAY, payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onLeaveVehicle(licensePlate) {
    fetchLeaveVehicle(licensePlate)
      .then((data) => {
        dispatch({ type: ACTIONS.PROCESS_TO_LEAVE, payload: data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ACTIONS.PROCESS_TO_LEAVE, payload: data });
      });
  }

  function onAddMember(licensePlate, memberType) {
    fetchAddMember(licensePlate, memberType)
      .then((data) => {
        dispatch({ type: ACTIONS.ADD_MEMBER, payload: data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ACTIONS.ADD_MEMBER, payload: data });
      });
  }

  function onDeleteMember(licensePlate) {
    fetchDeleteMember(licensePlate)
      .then((data) => {
        dispatch({ type: ACTIONS.DELETE_MEMBER, payload: data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ACTIONS.DELETE_MEMBER, payload: data });
      });
  }

  function onGetAllVehicles() {
    fetchAllVehicles()
      .then((data) => {
        dispatch({ type: ACTIONS.AllVehicles, payload: data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ACTIONS.AllVehicles, payload: data });
      });
  }

  function onGetAllMembers() {
    fetchAllMembers()
      .then((data) => {
        dispatch({ type: ACTIONS.AllMembers, payload: data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ACTIONS.AllMembers, payload: data });
      });
  }

  function onGetOccupancy() {
    fetchOccupiedPercentage()
      .then((data) => {
        dispatch({ type: ACTIONS.GET_OCCUPANCY, payload: data });
        setOccupancy(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: theme.palette.background.default, minHeight: "100vh" }}>
        <Router>
          <header>
            <Navbar setMode={setMode} mode={mode} />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path={PAGES.HOME} element={<HomePage/>} />
              <Route
                path={PAGES.CUSTOMER}
                element={
                  <CustomerPage
                    onParkVehicle={onParkVehicle}
                    onPayVehicle={onPayVehicle}
                    onLeaveVehicle={onLeaveVehicle}
                    onGetOccupancy={onGetOccupancy}
                    parkMessage={state.messages.parkMessage}
                    payMessage={state.messages.payMessage}
                    leaveMessage={state.messages.leaveMessage}
                    occupancy={occupancy}
                  />
                }
              />
              <Route
                path={PAGES.ADMIN}
                element={
                  <AdminPage
                    onAddMember={onAddMember}
                    onDeleteMember={onDeleteMember}
                    onGetAllMembers={onGetAllMembers}
                    onGetAllVehicles={onGetAllVehicles}
                    addMemberMessage={state.messages.addMemberMessage}
                    deleteMemberMessage={state.messages.deleteMemberMessage}
                  />
                }
              />
              <Route path="/all-members" element={<AllMembers />} />
              <Route path="/all-vehicles" element={<AllVehicles />} />
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </main>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
