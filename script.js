// // Define base URL and cohort constant 
const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api'; 
const COHORT = '2308-ACC-ET-WSEB-PT-B'; 

const PARTY_LIST = document.getElementById('partyList'); 

const events = [ 
    { 
        id: 1100, 
        name: 'Steve Party',
        description: 'Lorem ipusm', 
        date: "2023-12-20T10:00:00",
        location: "20392 Cherry Street",
        cohort: 13
    }, 
    { 
        id: 1200, 
        name: 'John Party',
        description: 'Lorem ipusm', 
        date: "2023-12-20T10:00:00",
        location: "20392 Cherry Street",
        cohort: 14
    }, 
    {
        id: 1210, 
        name: 'Griffin Party',
        description: 'Lorem ipusm', 
        date: "2023-12-20T10:00:00",
        location: "20392 Cherry Street",
        cohort: 15
    }, 
]; 


function renderEvents() { 
    for (let event of events) { 
        let eventListItem = document.createElement("li"); 
        eventListItem.textContent = `Name: ${event.name} Description ${event.description} Date: ${event.date} Location: ${event.location}`; 
        PARTY_LIST.append(eventListItem); 
    }
} 

renderEvents(); 
