/* ============================================
   SMARTTWIN AI 2.0
   dashboard.js
============================================ */

// ---------- KPI Values ----------

let oee = 87;
let production = 15231;
let energy = 245300;
let failures = 3;

// ---------- Update Elements ----------

function updateKPIs() {

    document.getElementById("oee").innerHTML = oee + "%";

    document.getElementById("production").innerHTML =
        production.toLocaleString();

    document.getElementById("energy").innerHTML =
        energy.toLocaleString() + " kWh";

    document.getElementById("failure").innerHTML = failures;

}

// Initial load
updateKPIs();

// ---------- Random Data Generator ----------

function random(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// ---------- Live Dashboard ----------

setInterval(() => {

    production += random(5, 35);

    energy += random(2, 10);

    oee += random(-1, 1);

    if (oee > 98) oee = 98;

    if (oee < 82) oee = 82;

    if (Math.random() > 0.92) {

        failures++;

    }

    updateKPIs();

}, 2000);

// ---------- Factory Status ----------

const statusList = [

    "Factory Running Normally",

    "AI Optimizing Production",

    "Machine Health Excellent",

    "Energy Optimization Active",

    "Predictive Maintenance Running",

    "Production Balanced",

    "Simulation Completed",

    "Digital Twin Synchronized",

    "AI Decision Generated"

];

function createStatusBar() {

    const topbar = document.querySelector(".topbar");

    const status = document.createElement("div");

    status.id = "factoryStatus";

    status.style.marginTop = "10px";

    status.style.fontSize = "15px";

    status.style.color = "#53d6ff";

    status.innerHTML = "Factory Running Normally";

    topbar.appendChild(status);

}

createStatusBar();

setInterval(() => {

    const text =
        statusList[random(0, statusList.length - 1)];

    document.getElementById("factoryStatus").innerHTML =
        "🤖 " + text;

}, 4000);

// ---------- AI Alerts ----------

const alerts = [

    "⚠ Temperature rising in Machine M-12",

    "✅ Maintenance completed successfully",

    "⚡ Energy usage optimized",

    "📈 Production efficiency improved",

    "🛠 Bearing vibration detected",

    "🤖 AI recommended speed adjustment",

    "🔋 Peak demand reduced",

    "📊 OEE increased by AI",

    "🟢 Digital Twin synchronized",

    "🚀 Factory performance improved"

];

function createAlertBox() {

    const box = document.createElement("div");

    box.id = "alertBox";

    box.style.position = "fixed";

    box.style.bottom = "20px";

    box.style.right = "20px";

    box.style.width = "320px";

    box.style.padding = "15px";

    box.style.borderRadius = "15px";

    box.style.background = "#102036";

    box.style.border = "1px solid #1d8cf8";

    box.style.boxShadow = "0 0 25px rgba(0,170,255,.3)";

    box.style.color = "white";

    box.style.zIndex = "999";

    box.style.fontWeight = "500";

    document.body.appendChild(box);

}

createAlertBox();

function updateAlert() {

    document.getElementById("alertBox").innerHTML =

        alerts[random(0, alerts.length - 1)];

}

updateAlert();

setInterval(updateAlert, 6000);

// ---------- Clock ----------

function createClock() {

    const clock = document.createElement("div");

    clock.id = "clock";

    clock.style.fontSize = "15px";

    clock.style.color = "#7ec8ff";

    clock.style.marginTop = "5px";

    document.querySelector(".topbar").appendChild(clock);

}

createClock();

setInterval(() => {

    const now = new Date();

    document.getElementById("clock").innerHTML =
        "🕒 " + now.toLocaleTimeString();

}, 1000);

// ---------- Progress Bar ----------

function createProgressBar() {

    const panel = document.querySelector(".main");

    const bar = document.createElement("div");

    bar.className = "loading-bar";

    panel.prepend(bar);

}

createProgressBar();

// ---------- Machine Health ----------

const machineHealth = [

    "Machine A : Healthy",

    "Machine B : Healthy",

    "Machine C : Maintenance Soon",

    "Machine D : Healthy",

    "Machine E : Optimized",

    "Machine F : Running"

];

const machinePanel = document.createElement("div");

machinePanel.style.marginTop = "20px";

machinePanel.style.padding = "15px";

machinePanel.style.background = "#102036";

machinePanel.style.borderRadius = "15px";

machinePanel.style.border = "1px solid rgba(255,255,255,.08)";

machinePanel.innerHTML = "<h4>Machine Status</h4>";

document.querySelector(".main").appendChild(machinePanel);

function updateMachines() {

    let html = "<h4>Machine Status</h4>";

    machineHealth.forEach(item => {

        html += "<p style='margin:8px 0'>🟢 " + item + "</p>";

    });

    machinePanel.innerHTML = html;

}

updateMachines();

// ---------- Decision Counter ----------

let decisions = 0;

const decisionCard = document.createElement("div");

decisionCard.style.position = "fixed";

decisionCard.style.top = "25px";

decisionCard.style.right = "25px";

decisionCard.style.padding = "15px 20px";

decisionCard.style.background = "#1d8cf8";

decisionCard.style.borderRadius = "12px";

decisionCard.style.fontWeight = "bold";

decisionCard.style.boxShadow = "0 0 25px rgba(29,140,248,.4)";

decisionCard.innerHTML =
"AI Decisions : 0";

document.body.appendChild(decisionCard);

setInterval(() => {

    decisions++;

    decisionCard.innerHTML =
        "AI Decisions : " + decisions;

}, 5000);

console.log("SMARTTWIN AI Dashboard Loaded Successfully");