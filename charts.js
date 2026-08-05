/* ==========================================
   SMARTTWIN AI 2.0
   charts.js
========================================== */

Chart.defaults.color = "#ffffff";
Chart.defaults.borderColor = "rgba(255,255,255,0.08)";

// ----------------------------
// Production Chart
// ----------------------------

const productionCtx =
document.getElementById("productionChart");

const productionLabels = [
"10:00",
"10:05",
"10:10",
"10:15",
"10:20",
"10:25",
"10:30"
];

const productionData = [
120,
135,
128,
145,
160,
172,
185
];

const productionChart = new Chart(productionCtx,{

type:"line",

data:{

labels:productionLabels,

datasets:[{

label:"Production Output",

data:productionData,

borderColor:"#00d4ff",

backgroundColor:"rgba(0,212,255,.15)",

fill:true,

tension:.4,

borderWidth:3,

pointRadius:4,

pointBackgroundColor:"#00d4ff"

}]

},

options:{

responsive:true,

plugins:{

legend:{
labels:{
color:"#fff"
}
}

},

scales:{

x:{
ticks:{
color:"#fff"
}
},

y:{
beginAtZero:true,
ticks:{
color:"#fff"
}
}

}

}

});

// ----------------------------
// Energy Chart
// ----------------------------

const energyCtx =
document.getElementById("energyChart");

const energyLabels = [
"10:00",
"10:05",
"10:10",
"10:15",
"10:20",
"10:25",
"10:30"
];

const energyData = [
210,
205,
215,
225,
218,
230,
228
];

const energyChart = new Chart(energyCtx,{

type:"bar",

data:{

labels:energyLabels,

datasets:[{

label:"Energy Consumption (kWh)",

data:energyData,

backgroundColor:[
"#007bff",
"#00bcd4",
"#26c6da",
"#29b6f6",
"#42a5f5",
"#5c6bc0",
"#7e57c2"
],

borderRadius:8

}]

},

options:{

responsive:true,

plugins:{

legend:{
labels:{
color:"#fff"
}
}

},

scales:{

x:{
ticks:{
color:"#fff"
}
},

y:{
beginAtZero:true,
ticks:{
color:"#fff"
}
}

}

}

});

// ----------------------------
// Live Updates
// ----------------------------

setInterval(()=>{

productionData.shift();

productionData.push(
Math.floor(Math.random()*40)+160
);

productionChart.update();

energyData.shift();

energyData.push(
Math.floor(Math.random()*30)+210
);

energyChart.update();

},3000);
/* ==========================================
   MACHINE HEALTH CHART
========================================== */

const healthCtx =
document.getElementById("healthChart");

const healthChart = new Chart(healthCtx,{

type:"doughnut",

data:{

labels:[
"Healthy",
"Warning",
"Critical"
],

datasets:[{

data:[
82,
13,
5
],

backgroundColor:[
"#00e676",
"#ffca28",
"#ff5252"
],

borderWidth:2

}]

},

options:{

responsive:true,

plugins:{

legend:{

position:"bottom",

labels:{
color:"#ffffff"
}

}

},

cutout:"70%"

}

});

/* ==========================================
   CREATE OEE PANEL
========================================== */

const oeePanel = document.createElement("div");

oeePanel.className="panel mt-4";

oeePanel.innerHTML=`

<h4>OEE Trend</h4>

<canvas id="oeeChart"></canvas>

`;

document.querySelector(".main").appendChild(oeePanel);

/* ==========================================
   OEE CHART
========================================== */

const oeeCtx =
document.getElementById("oeeChart");

const oeeValues=[
86,
87,
88,
89,
88,
90,
91
];

const oeeChart=new Chart(oeeCtx,{

type:"line",

data:{

labels:[
"1",
"2",
"3",
"4",
"5",
"6",
"7"
],

datasets:[{

label:"Overall Equipment Effectiveness",

data:oeeValues,

borderColor:"#00ffea",

backgroundColor:"rgba(0,255,234,.12)",

fill:true,

borderWidth:3,

tension:.45

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{

color:"#fff"

}

}

},

scales:{

x:{

ticks:{color:"#fff"}

},

y:{

min:70,

max:100,

ticks:{color:"#fff"}

}

}

}

});

/* ==========================================
   TEMPERATURE PANEL
========================================== */

const tempPanel=document.createElement("div");

tempPanel.className="panel mt-4";

tempPanel.innerHTML=`

<h4>Machine Temperature</h4>

<canvas id="tempChart"></canvas>

`;

document.querySelector(".main").appendChild(tempPanel);

/* ==========================================
   TEMPERATURE CHART
========================================== */

const tempCtx=
document.getElementById("tempChart");

const tempValues=[
58,
60,
61,
63,
62,
64,
65
];

const tempChart=new Chart(tempCtx,{

type:"line",

data:{

labels:[
"10:00",
"10:05",
"10:10",
"10:15",
"10:20",
"10:25",
"10:30"
],

datasets:[{

label:"Temperature °C",

data:tempValues,

borderColor:"#ff7043",

backgroundColor:"rgba(255,112,67,.18)",

fill:true,

borderWidth:3,

tension:.35

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{

color:"#fff"

}

}

},

scales:{

x:{

ticks:{color:"#fff"}

},

y:{

beginAtZero:false,

ticks:{color:"#fff"}

}

}

}

});

/* ==========================================
   LIVE AI CHART UPDATES
========================================== */

setInterval(()=>{

// Health Chart

healthChart.data.datasets[0].data=[

Math.floor(Math.random()*8)+80,

Math.floor(Math.random()*10)+10,

Math.floor(Math.random()*5)+2

];

healthChart.update();

// OEE

oeeValues.shift();

oeeValues.push(

Math.floor(Math.random()*6)+87

);

oeeChart.update();

// Temperature

tempValues.shift();

tempValues.push(

Math.floor(Math.random()*8)+58

);

tempChart.update();

},3000);

console.log("Charts Loaded Successfully");