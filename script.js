// // Define base URL and cohort constant 
const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-ET-WSEB-PT-B'; 
const EVENTS_ENDPOINT= `${BASE_URL}/events`; 

const PARTY_LIST = document.getElementById('partyList'); 
const formElement = document.getElementById('partyForm'); 
const partyName = document.getElementById('partyName'); 
const partyDate = document.getElementById('partyDate'); 
const partyLocation = document.getElementById('partyLocation'); 
const partyDescription = document.getElementById('partyDescription'); 
const partyTime = document.getElementById('partyTime'); 


formElement.addEventListener('submit', function (event) { 
    event.preventDefault(); 
    const newParty = { name: partyName.value, description: partyDescription.value, date: `${partyDate.value}T${partyTime.value}:00Z`, location: partyLocation.value }
    console.log(newParty); 
    createEvent(newParty); 
})


async function fetchEvents() {
    try {
        const response = await fetch(EVENTS_ENDPOINT); 
        if (!response.ok) {
            console.log("API error", response.status); 
            return; 
        }
        const jsonResponse = await response.json(); 
        const events = jsonResponse.data; 
        renderEvents(events); 

    } catch (err) {
        console.error(err); 
    }
}

fetchEvents(); 


function renderEvents(events) { 
    PARTY_LIST.innerHTML = ''; 
    for (let event of events) { 
        let eventListItem = document.createElement("li"); 
        eventListItem.textContent = `Name: ${event.name} Description ${event.description} Date: ${event.date} Location: ${event.location}`; 
        const deleteBtn = document.createElement('button'); 
        deleteBtn.textContent = "Delete"; 
        PARTY_LIST.append(eventListItem, deleteBtn); 
        deleteBtn.addEventListener('click', async () => { 
            await deleteEvent(event.id); 
            fetchEvents(); 
        }); 
    }
} 


async function createEvent(event) {
    try {
        const response = await fetch( EVENTS_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(event) } ); 
        if (!response.ok) {
            console.log("API error", response); 
            return; 
        }
    } catch (error) {
        console.error(error); 
    }
}


async function deleteEvent(id) {
    console.log('deleted'); 
    try {
        const response = await fetch(`${EVENTS_ENDPOINT}/${id}`, {
            method: "DELETE", 
            headers: { 'Content-Type': "application/json" }
        }); 
        if (!response.ok) {
            console.log("API error", response.status); 
            return; 
        }

    } catch (err) {
        console.error(err); 
    }
}