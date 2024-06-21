import { ACTIONS } from './constants';


export const initialState = {
    licensePlate: '',
    memberType: '',
    parkVehicleMessage: '',
    vehicles: [],
    members: [],
};


export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.PARK_VEHICLE:
      return {
        ...state,
        licensePlate: action.payload.message,
        parkVehicleMessage: action.payload.message,
      };
    case ACTIONS.PROCESS_TO_PAY:
        return {
            ...state,
            licensePlate: action.payload.message,
            payVehicleMessage: action.payload.message,
        };
    
    case ACTIONS.PROCESS_TO_LEAVE:
        return {
            ...state,
            licensePlate: action.payload.message,
            leaveVehicleMessage: action.payload.message,
        };
    case ACTIONS.ADD_MEMBER:
        return {
            ...state,
            licensePlate: action.payload.message,
            memberType: action.payload.message,
            addMemberMessage: action.payload.message,
        };

    case ACTIONS.DELETE_MEMBER:
        return {
            ...state,
            licensePlate: action.payload.message,
            memberType: '',
            deleteMemberMessage: action.payload.message,
        };
    case ACTIONS.GET_ALL_VEHICLES:
        return {
            ...state,
            vehicles: action.payload.vehicles, 
            deleteMemberMessage: action.payload.message,
        };
    case ACTIONS.GET_ALL_MEMBERS:
        return {
            ...state,
            members: action.payload.members,
            deleteMemberMessage: action.payload.message,
        };
    default:
      return state;
  }
}


export default reducer; 