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

import { ACTIONS } from "./constants";

export function onParkVehicle(dispatch) {
    return function (licensePlate) {
        dispatch({ type: ACTIONS.PARK_VEHICLE, payload: {licensePlate: licensePlate}})
    }
    .catch((err) => {
        console.log(err);
    });
}

export function onParkVehicle(licensePlate) {
    fetchParkVehicle(licensePlate)
      .then((data) => {
        if (data.message === "success") {
          setParkedMessage(data.message);
        } else {
          setParkedMessage(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setParkedMessage("Failed to park the car");
      });
  }

export  function onPayVehicle(licensePlate) {
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

export function onLeaveVehicle(licensePlate) {
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

export function onAddMember(licensePlate, memberType) {
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

export function onDeleteMember(licensePlate) {
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

export function onGetAllVehicles() {
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

export function onGetAllMembers() {
    fetchAllMembers()
      .then((data) => {
        if (data.status === "success") {
          setAllMembersMessage(`${data.message}`);
        } else {
          setAllMembersMessage(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


export function onGetOccupancy() {
    fetchOccupiedPercentage()
      .then((data) => {
        console.log("data: ", data);
        setOccupancy(data);
      })
      .catch((err) => {
        console.log(err);
      });
}





