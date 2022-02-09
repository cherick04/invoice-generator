// TODO: Add a button to add a service - ask to input text and cost
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

let servicesRequested = []

// DOM's
const serviceBtnContainer = document.getElementById("service-btn-container")

function render() {
    let btnContainer = ''
    for (let i=0; i<services.length; i++) {
        btnContainer += `
            <button class="service-btn" onClick='serviceRequested(${i})'">
                ${services[i].service}: $${services[i].cost}
            </button>
        `
    }
    serviceBtnContainer.innerHTML = btnContainer
}

function serviceRequested(serviceIndex) {

}

render()