/* ==========================================
   SMARTTWIN AI 2.0
   digitalTwin.js
========================================== */

const container = document.getElementById("digitalTwinCanvas");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x07111f);

const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
);

camera.position.set(0, 8, 18);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    container.clientWidth,
    container.clientHeight
);

renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

/* ===========================
   LIGHTS
=========================== */

scene.add(new THREE.AmbientLight(0xffffff, 0.8));

const light = new THREE.DirectionalLight(0xffffff, 1.2);
light.position.set(10, 20, 10);
scene.add(light);

/* ===========================
   FLOOR
=========================== */

const floor = new THREE.Mesh(
    new THREE.BoxGeometry(18, 0.5, 18),
    new THREE.MeshStandardMaterial({
        color: 0x1b2a41
    })
);

floor.position.y = -1;

scene.add(floor);

/* ===========================
   MACHINES
=========================== */

const machines = [];

const colors = [
    0x00bfff,
    0x00ff99,
    0xff9800,
    0xff5252,
    0x7c4dff,
    0x29b6f6
];

const positions = [
    [-6,-4],
    [0,-4],
    [6,-4],
    [-6,4],
    [0,4],
    [6,4]
];

positions.forEach((p,index)=>{

    const machine = new THREE.Mesh(

        new THREE.BoxGeometry(2,2,2),

        new THREE.MeshStandardMaterial({

            color:colors[index],

            metalness:.5,

            roughness:.4

        })

    );

    machine.position.set(p[0],0,p[1]);

    scene.add(machine);

    machines.push(machine);

});

/* ===========================
   CONVEYOR
=========================== */

const conveyor = new THREE.Mesh(

    new THREE.BoxGeometry(15,.3,2),

    new THREE.MeshStandardMaterial({

        color:0x666666

    })

);

conveyor.position.set(0,-0.3,0);

scene.add(conveyor);

/* ===========================
   BOXES
=========================== */

const boxes=[];

for(let i=0;i<6;i++){

    const box=new THREE.Mesh(

        new THREE.BoxGeometry(.8,.8,.8),

        new THREE.MeshStandardMaterial({

            color:0xffcc00

        })

    );

    box.position.set(-7+i*2.5,.5,0);

    scene.add(box);

    boxes.push(box);

}

/* ===========================
   AI CORE
=========================== */

const aiCore=new THREE.Mesh(

    new THREE.SphereGeometry(1,32,32),

    new THREE.MeshStandardMaterial({

        color:0x00ffff,

        emissive:0x00ffff,

        emissiveIntensity:1.2

    })

);

aiCore.position.set(0,5,0);

scene.add(aiCore);

/* ===========================
   AI RING
=========================== */

const ring=new THREE.Mesh(

    new THREE.TorusGeometry(1.6,.08,16,100),

    new THREE.MeshBasicMaterial({

        color:0x00ffff

    })

);

ring.rotation.x=Math.PI/2;

ring.position.copy(aiCore.position);

scene.add(ring);

/* ===========================
   SENSORS
=========================== */

const sensors=[];

machines.forEach(machine=>{

    const sensor=new THREE.Mesh(

        new THREE.SphereGeometry(.25,16,16),

        new THREE.MeshBasicMaterial({

            color:0x00ff00

        })

    );

    sensor.position.set(

        machine.position.x,

        1.7,

        machine.position.z

    );

    scene.add(sensor);

    sensors.push(sensor);

});

/* ===========================
   DATA LINES
=========================== */

const lineMaterial=new THREE.LineBasicMaterial({

    color:0x00ffff

});

machines.forEach(machine=>{

    const points=[

        aiCore.position.clone(),

        machine.position.clone()

    ];

    const geometry=new THREE.BufferGeometry().setFromPoints(points);

    const line=new THREE.Line(

        geometry,

        lineMaterial

    );

    scene.add(line);

});

/* ===========================
   ANIMATION
=========================== */

function animate(){

    requestAnimationFrame(animate);

    aiCore.rotation.y+=0.02;

    ring.rotation.z+=0.03;

    machines.forEach(machine=>{

        machine.rotation.y+=0.01;

    });

    boxes.forEach(box=>{

        box.position.x+=0.03;

        if(box.position.x>7){

            box.position.x=-7;

        }

    });

    sensors.forEach(sensor=>{

        if(Math.random()>0.97){

            sensor.material.color.setHex(0xff0000);

        }else{

            sensor.material.color.setHex(0x00ff00);

        }

    });

    camera.position.x=Math.sin(Date.now()*0.0004)*18;

    camera.position.z=Math.cos(Date.now()*0.0004)*18;

    camera.lookAt(0,0,0);

    renderer.render(scene,camera);

}

animate();

/* ===========================
   RESIZE
=========================== */

window.addEventListener("resize",()=>{

    camera.aspect=container.clientWidth/container.clientHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(

        container.clientWidth,

        container.clientHeight

    );

});

console.log("Digital Twin Loaded Successfully");