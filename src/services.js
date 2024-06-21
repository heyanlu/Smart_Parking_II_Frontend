import { BACKEND_URL } from './constants';

function chainPromise(promise) {
    return promise
        .catch((err) => {
            return Promise.reject({ error: "network-error" });
        })
        .then((response) => {
            console.log("chainPromise - response status:", response.status);
            if (!response.ok) {
                return response.json().then((err) => Promise.reject(err));
            }
            return response.json();
        });
}

export function fetchParkVehicle(licensePlate) {
    // const vehicle = {
    //     licensePlate: licensePlate.toUpperCase(),
    //     parkingPosition: null,  
    //     arrivalTime: null,      
    //     paymentTime: null,      
    //     leaveTime: null        
    // };


    const fetched = fetch(`${BACKEND_URL}/park`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",  
        },
        body: JSON.stringify({ licensePlate }) 
    });

    return chainPromise(fetched); 
} 



export function fetchPayVehicle(licensePlate) {
    licensePlate = licensePlate.toUpperCase();
    const fetched = fetch(`${BACKEND_URL}/process-payment`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({ licensePlate })
    });


    return chainPromise(fetched); 
}


export function fetchLeaveVehicle(licensePlate) {
    licensePlate = licensePlate.toUpperCase();
    const fetched = fetch(`${BACKEND_URL}/process-to-leave`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({ licensePlate })
    });


    return chainPromise(fetched); 
}



//admin page
export function fetchAddMember(licensePlate, memberType) {
    licensePlate = licensePlate.toUpperCase();
    const fetched = fetch(`${BACKEND_URL}/add-member`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({ licensePlate, memberType })
    });
    return chainPromise(fetched); 
}


export function fetchDeleteMember(licensePlate) {
    licensePlate = licensePlate.toUpperCase();
    const fetched = fetch(`${BACKEND_URL}/delete-member`, {
        method: "DELET",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ licensePlate })
    });
    return chainPromise(fetched);
}



export function fetchAllVehicles() {
    return fetch(`${BACKEND_URL}/all-vehicles`)
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching vehicles:', error);
        throw error;
      });
  }
  
  export function fetchAllMembers() {
    return fetch(`${BACKEND_URL}/all-member`)
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching members:', error);
        throw error;
      });
  }
