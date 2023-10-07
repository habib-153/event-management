const getStoredEvent = () =>{
    const storedEvent = localStorage.getItem('services')
    if(storedEvent){
        return JSON.parse(storedEvent);
    }
    return [];
}

const saveEvent = id =>{
    const storedEvents = getStoredEvent();
    const exists = storedEvents.find(serviceId => serviceId === id)
    if(!exists){
        storedEvents.push(id);
        localStorage.setItem('services', JSON.stringify(storedEvents))
    }
}

export { getStoredEvent, saveEvent}