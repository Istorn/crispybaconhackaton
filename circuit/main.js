var BPM=0;
var moving=0;
var angle=0;
var camera=null;
var scene=null;
var ring=null;
var RADIUS=48;

var MINSTEP=0.001;
var DELTAHEAD=0.05
var HALF_WIDTH=2;
var stepsize=1;
var lastT=null;
var curT=0;
var lambdaBPM=0.8;
var inertiaBPM=0.995;
function getSeconds(){
	let d = new Date();
	return d.getMilliseconds()/1000.;
}

function updateBPM(newBPM){
	BPM = lambdaBPM*BPM + (1-lambdaBPM)*newBPM;
	BPM= Math.max(0, BPM);
	return BPM;
}

function inertia(){
//	console.log("inertia", inertiaBPM*BPM);
	updateBPM(inertiaBPM*BPM);
};