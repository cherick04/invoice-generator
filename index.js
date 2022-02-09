// TODO: Add a button to add a service - ask to input text and cost

// Array of service objects
const services = [
    {
        service: "Wash Car",
        cost: 10
    },
    {
        service: "Mow Lawn",
        cost: 20
    },
    {
        service: "Pull Weeds",
        cost: 30
    }
]

// Array of services requested. Starts empty
let servicesRequested = []

// DOM's
const serviceBtnContainer = document.getElementById("service-btn-container")
const servicesContainer = document.getElementById('services-container')
const totalAmountLbl = document.getElementById('total-lbl')
const paymentLabel = document.getElementById('pmt-lbl')
const sendButton = document.getElementById('send-btn')

/* Event listener for Send button. Clears all the services requested */
sendButton.addEventListener('click', function() {
    servicesRequested = []
    renderServices()
})

/* Renders when the page initializes */
function initialRender() {
    renderButtons()
    renderTotal()
}

/** Renders all service buttons onto the page */ 
function renderButtons() {
    let btnContainer = ''
    for (let i=0; i<services.length; i++) {
        btnContainer += `
            <button class="service-btn" onClick='requestServiceFor(${i})'">
                ${services[i].service}: $${services[i].cost}
            </button>
        `
    }
    serviceBtnContainer.innerHTML = btnContainer
}

/* Renders total amount of added services and displays payment message */
function renderTotal() {
    paymentLabel.hidden = servicesRequested.length === 0
    let total = 0
    for (let i=0; i<servicesRequested.length; i++) {
        total += servicesRequested[i].cost
    }
    totalAmountLbl.textContent = total
}

/* Renders all requested services. */
function renderServices() {
    let serviceContent = ''
    // TODO: Add remove functionality
    for (let i=0; i<servicesRequested.length; i++) {
        serviceContent += `
            <div id="services-container">
                <span>${servicesRequested[i].service}</span>
                <button class="remove-btn" onclick="removeServiceAt(${i})">Remove</button>
                <span class="r-lbl">${servicesRequested[i].cost}</span>
                <span class="r-symbol-lbl">$</span>
            </div>
        `
    }
    servicesContainer.innerHTML = serviceContent
    renderTotal()
}

/** Fires on the event of a service being requested
 * @param: The index of the service array
*/
function requestServiceFor(index) {
    if (!servicesRequested.includes(services[index])) {
        servicesRequested.push(services[index])
        renderServices()
    }
}

/** Fires when removing an item in the servicesRequested array
 * @param: The index of the requested services array
*/
function removeServiceAt(index) {
    servicesRequested = servicesRequested
        .slice(0, index)
        .concat(servicesRequested.slice(index+1, servicesRequested.length))
    renderServices()
}

initialRender()