// Simulating fire risk detection and status
function checkFireRisk() {
    let riskElement = document.getElementById('fire-risk');
    let currentRisk = Math.random();  // Simulating random risk value

    if (currentRisk > 0.7) {
        riskElement.textContent = "High Risk! Fire detected.";
        riskElement.classList.add('text-danger');
        riskElement.classList.remove('text-success');
    } else {
        riskElement.textContent = "No risk detected.";
        riskElement.classList.add('text-success');
        riskElement.classList.remove('text-danger');
    }
}

// Simulating temperature monitoring
function monitorTemperature() {
    let tempElement = document.getElementById('temperature-status');
    let currentTemp = Math.random() * 100; // Simulate random temperature value between 0 and 100

    if (currentTemp > 70) {
        tempElement.textContent = "High Temperature! Risk of fire.";
        tempElement.classList.add('text-danger');
        tempElement.classList.remove('text-success');
    } else {
        tempElement.textContent = "Temperature Normal.";
        tempElement.classList.add('text-success');
        tempElement.classList.remove('text-danger');
    }
}

// Simulating emergency alert
function sendAlert() {
    let alertElement = document.getElementById('alert-status');

    alertElement.textContent = "Alert Sent! Emergency Services Notified.";
    alertElement.classList.add('text-danger');
    alertElement.classList.remove('text-success');
}

// Event listeners for buttons
document.querySelector(".btn-warning").addEventListener("click", function() {
    checkFireRisk();
    monitorTemperature();
});

document.querySelector(".btn-danger").addEventListener("click", function() {
    sendAlert();
});
