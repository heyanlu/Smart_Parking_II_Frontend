import { initialMessages, ACTIONS } from './constants';


export const initialState = {
    status: "",
    occupancy: 0.0,
    vehicles: [],
    members: [],
    messages: { ...initialMessages }
};


export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.PARK_VEHICLE:
      return {
        ...state,
        status: action.payload.status,
        messages: {
            ...state.messages,
            parkMessage: action.payload.message
        }
      };
    case ACTIONS.PROCESS_TO_PAY:
        return {
            ...state,
            status: action.payload.status,
            messages: {
                ...state.messages,
                payMessage: action.payload.message
            }
        };
    case ACTIONS.PROCESS_TO_LEAVE:
        return {
            ...state,
            status: action.payload.status,
            messages: {
                ...state.messages,
                leaveMessage: action.payload.message
            }
        };
    case ACTIONS.ADD_MEMBER:
        return {
            ...state,
            status: action.payload.status,
            messages: {
                ...state.messages,
                addMemberMessage: action.payload.message
            }
        };

    case ACTIONS.DELETE_MEMBER:
        return {
            ...state,
            status: action.payload.status,
            messages: {
                ...state.messages,
                deleteMemberMessage: action.payload.message
            }
        };
    case ACTIONS.GET_ALL_VEHICLES:
        return {
            ...state,
            vehicles: action.payload.vehicles, 
            messages: {
                ...state.messages,
                allVehiclesMessage: action.payload.message
            }
        };
    case ACTIONS.GET_ALL_MEMBERS:
        return {
            ...state,
            members: action.payload.members,
            messages: {
                ...state.messages,
                allMembersMessage: action.payload.message
            }
        };
    case ACTIONS.GET_OCCUPIED_PERCENTAGE:
        return {
            ...state,
            occupancy: action.payload.members,
            messages: {
                ...state.messages,
                occupancyMessage: action.payload.message
            }
        };
    default:
      return state;
  }
}


export default reducer; 