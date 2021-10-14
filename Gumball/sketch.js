// module aliases
var Engine = Matter.Engine,
	Render = Matter.Render,
	World = Matter.World,
	Bodies = Matter.Bodies,
	Bounds = Matter.Bounds,
	w = window.innerWidth,
	h = window.innerHeight,
	stPos = -1000,
	rad = 75,
	scl = rad/250,
	rand = Math.floor(Math.random()*(window.innerWidth));

// create an engine
var engine = Engine.create();

// var btn = document.createElement("BUTTON");
	// btn.innerHTML = "CLICK ME";
	// document.body.appendChild(btn);

// create a renderer
var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
		width: w-15,
		height: h-15,
		wireframes: false,
		background: '#FFF'
	}
});

//	window.addEventListener('resize',() => {
//		render.bounds.max.x = window.innerWidth;
//		render.bounds.max.y = window.innerHeight;
//		render.options.width = window.innerWidth;
//		render.options.height = window.innerHeight;
//		render.canvas.width = window.innerWidth;
//		render.canvas.height = window.innerHeight;
//	});

// create ground and 14 circles
var ground = Bodies.rectangle(w/2, h, w, 30, {isStatic: true}),
	leftWall = Bodies.rectangle(-15, 0, 30, 5*h, {isStatic: true}),
	rightWall = Bodies.rectangle(w, 0, 30, 5*h, {isStatic: true}),
	circA = Bodies.circle(rand, stPos, 75, {
		render: {
			sprite: {
				texture: 'Images/balls/coathook.png',
				xScale: scl,
				yScale: scl
			}
		}
	}),
	circB = Bodies.circle(rand, stPos, rad, {
		render: {
			sprite: {
				texture: 'Images/balls/stickpod.png',
				xScale: scl,
				yScale: scl
			}
		}
	}),
	circC = Bodies.circle(rand, stPos, rad, {
		render: {
			sprite: {
				texture: 'Images/balls/stride.png',
				xScale: scl,
				yScale: scl
			}
		}
	}),
	circD = Bodies.circle(rand, stPos, rad, {
		render: {
			sprite: {
				texture: 'Images/balls/doodle.png',
				xScale: scl,
				yScale: scl
			}
		}
	}),
	circE = Bodies.circle(rand, stPos, rad, {
		render: {
			sprite: {
				texture: 'Images/balls/shelter.png',
				xScale: scl,
				yScale: scl
			}
		}
	}),
	circF = Bodies.circle(rand, stPos, rad, {
		render: {
			sprite: {
				texture: 'Images/balls/pokeball.png',
				xScale: scl,
				yScale: scl
			}
		}
	}),
	circG = Bodies.circle(rand, stPos, rad, {
		render: {
			sprite: {
				texture: 'Images/balls/212.png',
				xScale: scl,
				yScale: scl
			}
		}
	}),
	circH = Bodies.circle(rand, stPos, rad, {
		render: {
			sprite: {
				texture: 'Images/balls/2007.png',
				xScale: scl,
				yScale: scl
			}
		}
	}),
	circI = Bodies.circle(rand, stPos, rad, {
		render: {
			sprite: {
				texture: 'Images/balls/tower.png',
				xScale: scl,
				yScale: scl
			}
		}
	}),
	circJ = Bodies.circle(rand, stPos, rad, {
		render: {
			sprite: {
				texture: 'Images/balls/sign.png',
				xScale: scl,
				yScale: scl
			}
		}
	}),
	circK = Bodies.circle(rand, stPos, rad, {
		render: {
			sprite: {
				texture: 'Images/balls/rushshirt.png',
				xScale: scl,
				yScale: scl,
			}
		}
	}),
	circL = Bodies.circle(rand, stPos, rad, {
		render: {
			sprite: {
				texture: 'Images/balls/cnt.png',
				xScale: scl,
				yScale: scl
			}
		}
	}),
	circM = Bodies.circle(rand, stPos, rad, {
		render: {
			sprite: {
				texture: 'Images/balls/resume.png',
				xScale: scl,
				yScale: scl
			}
		}
	}),
	circN = Bodies.circle(rand, stPos, rad, {
		render: {
			sprite: {
				texture: 'Images/balls/resume.png',
				xScale: scl,
				yScale: scl
			}
		}
	});
	circO = Bodies.circle(rand, stPos, rad, {
		render: {
			sprite: {
				texture: 'Images/balls/contact.png',
				xScale: scl,
				yScale: scl
			}
		}
	});

//Matter.Events.on(object, eventNames, callback)

var mouse = Matter.Mouse.create(render.canvas),
    mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });


// SS - add all of the bodies to the world
World.add(engine.world, [ground, leftWall, rightWall, circA, circB, circC, circD, circE, circF, circG, circH, circI, circJ, circK, circL, circM, circN, circO]);

// add the static bodies to the world
// World.add(engine.world, [ground, leftWall, rightWall]);

// mousedown event that checks mouse position to open modals
Matter.Events.on(mouseConstraint, 'mousedown', function(event) {
	
	// start button mousedown check
	// var startBtn = document.getElementsByClass("modal-start");

	// startBtn.onclick = function(){
	// 	World.add(engine.world, [circA, circB, circC, circD, circE, circF, circG, circH, circI, circJ, circK, circL, circM, circN, circO]);
	// 	startBtn.style.display = "none";
	// };

	var mousePosition = event.mouse.position;

	var modalA = document.getElementById("modalA");
		closeA = document.getElementById("closeA");

	var modalB = document.getElementById("modalB");
		closeB = document.getElementById("closeB");

	var modalC = document.getElementById("modalC");
		closeC = document.getElementById("closeC");

	var modalD = document.getElementById("modalD");
		closeD = document.getElementById("closeD");

	var modalE = document.getElementById("modalE");
		closeE = document.getElementById("closeE");

	var modalF = document.getElementById("modalF");
		closeF = document.getElementById("closeF");

	var modalG = document.getElementById("modalG");
		closeG = document.getElementById("closeG");

	var modalH = document.getElementById("modalH");
		closeH = document.getElementById("closeH");

	var modalI = document.getElementById("modalI");
		closeI = document.getElementById("closeI");

	var modalJ = document.getElementById("modalJ");
		closeJ = document.getElementById("closeJ");

	var modalK = document.getElementById("modalK");
		closeK = document.getElementById("closeK");

	var modalL = document.getElementById("modalL");
		closeL = document.getElementById("closeL");

	var modalM = document.getElementById("modalM");
		closeM = document.getElementById("closeM");

	var modalN = document.getElementById("modalN");
		closeN = document.getElementById("closeN");

	var modalO = document.getElementById("modalO");
		closeO = document.getElementById("closeO");

	
	if (mousePosition.x > circA.bounds.min.x && mousePosition.x < circA.bounds.max.x &&
	 	mousePosition.y > circA.bounds.min.y && mousePosition.y < circA.bounds.max.y) {
	 		modalA.style.display = "block";
	}

	if (mousePosition.x > circB.bounds.min.x && mousePosition.x < circB.bounds.max.x &&
		mousePosition.y > circB.bounds.min.y && mousePosition.y < circB.bounds.max.y) {
			modalB.style.display = "block";
	}

	if (mousePosition.x > circC.bounds.min.x && mousePosition.x < circC.bounds.max.x &&
		mousePosition.y > circC.bounds.min.y && mousePosition.y < circC.bounds.max.y) {
			modalC.style.display = "block";
	}

	if (mousePosition.x > circD.bounds.min.x && mousePosition.x < circD.bounds.max.x &&
		mousePosition.y > circD.bounds.min.y && mousePosition.y < circD.bounds.max.y) {
			modalD.style.display = "block";
	}

	if (mousePosition.x > circE.bounds.min.x && mousePosition.x < circE.bounds.max.x &&
		mousePosition.y > circE.bounds.min.y && mousePosition.y < circE.bounds.max.y) {
			modalE.style.display = "block";
	}

	if (mousePosition.x > circF.bounds.min.x && mousePosition.x < circF.bounds.max.x &&
		mousePosition.y > circF.bounds.min.y && mousePosition.y < circF.bounds.max.y) {
			modalF.style.display = "block";
	}

	if (mousePosition.x > circG.bounds.min.x && mousePosition.x < circG.bounds.max.x &&
		mousePosition.y > circG.bounds.min.y && mousePosition.y < circG.bounds.max.y) {
			modalG.style.display = "block";
	}

	if (mousePosition.x > circH.bounds.min.x && mousePosition.x < circH.bounds.max.x &&
		mousePosition.y > circH.bounds.min.y && mousePosition.y < circH.bounds.max.y) {
			modalH.style.display = "block";
	}

	if (mousePosition.x > circI.bounds.min.x && mousePosition.x < circI.bounds.max.x &&
		mousePosition.y > circI.bounds.min.y && mousePosition.y < circI.bounds.max.y) {
			modalI.style.display = "block";
	}

	if (mousePosition.x > circJ.bounds.min.x && mousePosition.x < circJ.bounds.max.x &&
		mousePosition.y > circJ.bounds.min.y && mousePosition.y < circJ.bounds.max.y) {
			modalJ.style.display = "block";
	}

	if (mousePosition.x > circK.bounds.min.x && mousePosition.x < circK.bounds.max.x &&
		mousePosition.y > circK.bounds.min.y && mousePosition.y < circK.bounds.max.y) {
			modalK.style.display = "block";
	}

	if (mousePosition.x > circL.bounds.min.x && mousePosition.x < circL.bounds.max.x &&
		mousePosition.y > circL.bounds.min.y && mousePosition.y < circL.bounds.max.y) {
			modalL.style.display = "block";
	}

	if (mousePosition.x > circM.bounds.min.x && mousePosition.x < circM.bounds.max.x &&
		mousePosition.y > circM.bounds.min.y && mousePosition.y < circM.bounds.max.y) {
			modalM.style.display = "block";
	}

	if (mousePosition.x > circN.bounds.min.x && mousePosition.x < circN.bounds.max.x &&
		mousePosition.y > circN.bounds.min.y && mousePosition.y < circN.bounds.max.y) {
			modalN.style.display = "block";
	}

	if (mousePosition.x > circO.bounds.min.x && mousePosition.x < circO.bounds.max.x &&
		mousePosition.y > circO.bounds.min.y && mousePosition.y < circO.bounds.max.y) {
			modalO.style.display = "block";
	}

	closeA.onclick = function(){
		modalA.style.display = "none";
	}

	closeB.onclick = function(){
		modalB.style.display = "none";
	}

	closeC.onclick = function(){
		modalC.style.display = "none";
	}

	closeD.onclick = function(){
		modalD.style.display = "none";
	}

	closeE.onclick = function(){
		modalE.style.display = "none";
	}

	closeF.onclick = function(){
		modalF.style.display = "none";
	}

	closeG.onclick = function(){
		modalG.style.display = "none";
	}

	closeH.onclick = function(){
		modalH.style.display = "none";
	}

	closeI.onclick = function(){
		modalI.style.display = "none";
	}

	closeJ.onclick = function(){
		modalJ.style.display = "none";
	}

	closeK.onclick = function(){
		modalK.style.display = "none";
	}

	closeL.onclick = function(){
		modalL.style.display = "none";
	}

	closeM.onclick = function(){
		modalM.style.display = "none";
	}

	closeN.onclick = function(){
		modalN.style.display = "none";
	}

	closeO.onclick = function(){
		modalO.style.display = "none";
	}

});

// run the engine
Engine.run(engine);

//run the renderer
Render.run(render);

//var addItems = function () {
//	return Bodies.circle(Math.random()*400 + 30, 30, 30);
//};

// $('.add-items').on('click', function () {
//     World.add(engine.world, addItems());
// });