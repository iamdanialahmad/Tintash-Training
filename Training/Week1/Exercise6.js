
// Import
const EventEmitter = require("events");

// Monitoring Systems
const temperature = new EventEmitter();
const airPressure = new EventEmitter();
const humidity = new EventEmitter();
const observable = new EventEmitter();
const dashboard  = new EventEmitter();

// Gets random value
const randomValues = () => {
    return (Math.random() *  100);
  };

// Return random Retrieval time value between 100-2000ms
const randomRetrievalTime = () => {
    return (Math.random() * (2000 - 100)) + 100;
  };

// Current display object
let currentValues = {
    
    temperature: 0,
    airPressure: 0,
    humidity: 0,
};

// Previous display object
let previousValues = {
    temperature: -1,
    airPressure: -1,
    humidity: -1,
};

// On temperature.emit() for event "data"
temperature.on("data", ()=>{
    let retrievalTime = randomRetrievalTime();
    let val = randomValues();
    setTimeout(()=>{
        // If value not recieved with 1000ms
        if(retrievalTime > 1000){
            currentValues.temperature = val
        }
        else{
            currentValues.temperature = 'N/A'
        }
    },retrievalTime)
    
})
// On humidity.emit() for event "data"
humidity.on("data", ()=>{
    let retrievalTime = randomRetrievalTime();
    let val = randomValues();
    setTimeout(()=>{
        // If value not recieved with 1000ms
        if(retrievalTime > 1000){
            currentValues.humidity = val
        }
        else{
            currentValues.humidity = 'N/A'
        }
    },retrievalTime);
    
})
// On airPressure.emit() for event "data"

airPressure.on("data", ()=>{
    let retrievalTime = randomRetrievalTime();
    let val = randomValues();
    setTimeout(()=>{
        // If value not recieved with 1000ms
        if(retrievalTime > 1000){
            currentValues.airPressure = val
        }
        else{
            currentValues.airPressure = 'N/A'
        }
    },retrievalTime)
    
})

// 
observable.on("display object", ()=>{
    
    console.log("***************MONITORING SYSTEM***************")
    console.log(`System 1: Temperature = ${currentValues.temperature}`)
    console.log(`System 2: Humidity = ${currentValues.humidity}`)
    console.log(`System 3: AirPressure = ${currentValues.airPressure}`)
    console.log("**********************************************\n")
        
})

dashboard.on("observe",()=>{
    setInterval(()=>{
    temperature.emit("data")
    humidity.emit("data")
    airPressure.emit("data")
    // If one of the systems sends a new value
        if(currentValues.temperature !== previousValues.temperature ||
            currentValues.humidity !== previousValues.humidity ||
            currentValues.airPressure !== previousValues.airPressure)
            {

                observable.emit("display object")      
    
           }
    // Updating previousValues Object       
    previousValues.airPressure = currentValues.airPressure
    previousValues.temperature = currentValues.temperature
    previousValues.humidity = currentValues.humidity
    }, "100");

})

dashboard.emit("observe")
