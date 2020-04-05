 let BPM=0;
 let moving=0;
 let angle=0;
 let camera=null;
 let scene=null;
 let ring=null;
 let RADIUS=48;

 let MINSTEP=0.001;
 let DELTAHEAD=0.05
 let HALF_WIDTH=2;
 let stepsize=1;
 let lastT=null;
 let curT=0;
 let lambdaBPM=0.8;
 let inertiaBPM=0.995;

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