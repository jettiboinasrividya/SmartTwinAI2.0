/* =====================================================
   SMARTTWIN AI 2.0
   simulation.js
===================================================== */

// ----------------------------
// Factory Scenarios
// ----------------------------

const scenarios = [

{
name:"Normal Production",
efficiency:92,
energy:84,
risk:6
},

{
name:"High Production",
efficiency:98,
energy:95,
risk:24
},

{
name:"Energy Saving",
efficiency:88,
energy:62,
risk:8
},

{
name:"Predictive Maintenance",
efficiency:90,
energy:82,
risk:3
},

{
name:"Emergency Recovery",
efficiency:74,
energy:90,
risk:35
}

];

// ----------------------------
// Simulation Panel
// ----------------------------

const simulationPanel = document.createElement("div");

simulationPanel.className="panel mt-4";

simulationPanel.innerHTML=`

<h4>Multi-Scenario Simulation</h4>

<table class="table table-dark table-hover">

<thead>

<tr>

<th>Scenario</th>

<th>Efficiency</th>

<th>Energy</th>

<th>Risk</th>

</tr>

</thead>

<tbody id="scenarioBody">

</tbody>

</table>

`;

document.querySelector(".main").appendChild(simulationPanel);

const tbody=document.getElementById("scenarioBody");

function loadScenarioTable(){

tbody.innerHTML="";

scenarios.forEach(s=>{

tbody.innerHTML+=`

<tr>

<td>${s.name}</td>

<td>${s.efficiency}%</td>

<td>${s.energy}%</td>

<td>${s.risk}%</td>

</tr>

`;

});

}

loadScenarioTable();

// ----------------------------
// AI Decision Engine
// ----------------------------

const aiPanel=document.createElement("div");

aiPanel.className="panel mt-4";

aiPanel.innerHTML=`

<h4>AI Decision Engine</h4>

<h2 id="decisionText">Waiting...</h2>

<p id="decisionReason"></p>

`;

document.querySelector(".main").appendChild(aiPanel);

function chooseBestScenario(){

let best=scenarios[0];

scenarios.forEach(s=>{

const score=

(s.efficiency*0.6)

+

((100-s.energy)*0.2)

+

((100-s.risk)*0.2);

const bestScore=

(best.efficiency*0.6)

+

((100-best.energy)*0.2)

+

((100-best.risk)*0.2);

if(score>bestScore){

best=s;

}

});

document.getElementById("decisionText").innerHTML=

best.name;

document.getElementById("decisionReason").innerHTML=

"AI selected this scenario because it provides the highest operational score considering production efficiency, energy optimization, and operational risk.";

}

chooseBestScenario();

// ----------------------------
// Factory Execution
// ----------------------------

const executePanel=document.createElement("div");

executePanel.className="panel mt-4";

executePanel.innerHTML=`

<h4>Automated Factory Execution</h4>

<div class="progress" style="height:25px">

<div

id="executionBar"

class="progress-bar progress-bar-striped progress-bar-animated"

style="width:0%">

0%

</div>

</div>

`;

document.querySelector(".main").appendChild(executePanel);

let progress=0;

setInterval(()=>{

progress++;

if(progress>100){

progress=0;

}

const bar=document.getElementById("executionBar");

bar.style.width=progress+"%";

bar.innerHTML=progress+"%";

},120);

// ----------------------------
// Continuous Learning
// ----------------------------

const learningPanel=document.createElement("div");

learningPanel.className="panel mt-4";

learningPanel.innerHTML=`

<h4>Continuous Learning</h4>

<canvas id="learningCanvas"

width="700"

height="220"

style="background:#081520;border-radius:10px">

</canvas>

`;

document.querySelector(".main").appendChild(learningPanel);

const canvas=document.getElementById("learningCanvas");

const ctx=canvas.getContext("2d");

let points=[];

for(let i=0;i<40;i++){

points.push(

120+Math.random()*50

);

}

function drawLearning(){

ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);

ctx.strokeStyle="#00e5ff";

ctx.lineWidth=3;

ctx.beginPath();

points.forEach((p,index)=>{

const x=index*18;

const y=canvas.height-p;

if(index===0){

ctx.moveTo(x,y);

}else{

ctx.lineTo(x,y);

}

});

ctx.stroke();

ctx.fillStyle="#ffffff";

ctx.font="16px Arial";

ctx.fillText(

"AI Learning Accuracy",

20,

25

);

points.shift();

points.push(

120+Math.random()*50

);

requestAnimationFrame(drawLearning);

}

drawLearning();

// ----------------------------
// Autonomous Decision Log
// ----------------------------

const logPanel=document.createElement("div");

logPanel.className="panel mt-4";

logPanel.innerHTML=`

<h4>Autonomous Decision Log</h4>

<div id="logArea"

style="height:250px;

overflow:auto;

font-size:15px">

</div>

`;

document.querySelector(".main").appendChild(logPanel);

const logs=[

"Machine vibration analysed.",

"Production speed increased.",

"Energy usage optimized.",

"Maintenance scheduled.",

"Digital Twin synchronized.",

"Quality inspection passed.",

"AI selected best production plan.",

"Cooling system optimized.",

"Fault prediction completed.",

"Factory execution successful."

];

function addLog(){

const area=document.getElementById("logArea");

const now=new Date().toLocaleTimeString();

const message=

logs[Math.floor(Math.random()*logs.length)];

area.innerHTML=

"<p>["+now+"] "+message+"</p>"

+

area.innerHTML;

}

addLog();

setInterval(addLog,3000);

// ----------------------------
// Scenario Refresh
// ----------------------------

setInterval(()=>{

scenarios.forEach(s=>{

s.efficiency=Math.max(
70,
Math.min(
100,
s.efficiency+(Math.random()*4-2)
)
);

s.energy=Math.max(
50,
Math.min(
100,
s.energy+(Math.random()*4-2)
)
);

s.risk=Math.max(
1,
Math.min(
40,
s.risk+(Math.random()*4-2)
)
);

});

loadScenarioTable();

chooseBestScenario();

},5000);

console.log("Simulation Engine Loaded");