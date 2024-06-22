export const ACTIONS = {
    PARK_VEHICLE: "parkVehicle",
    PROCESS_TO_PAY: "processToPay",
    PROCESS_TO_LEAVE: "processToLeave",
    ADD_MEMBER: "addMember",
    DELETE_MEMBER: "deleteMember",
    GET_ALL_VEHICLES:"getAllVehicles", 
    GET_ALL_MEMBERS:"fetchAllMembers",
    GET_OCCUPIED_PERCENTAGE:"getOccupiedPercentage",
};

export const PAGES = {
    HOME: "Home",
    CUSTOMER: "Customer",
    ADMIN: "Admin"
}

export const PARKINGRATE = 5.0

export const PARKINGCAPACITY = 500

export const BACKEND_URL = 'http://localhost:8080/api/v1/smart_parking';

