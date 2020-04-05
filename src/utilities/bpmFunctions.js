let actual_bpm = 60;
let previous_peak_time = 0;
let ascending = true;
let previous_value = 80;
let previous_min_value = 0;

let previous_boost_time = 0;

const sensitivity =  17 //modify this number. Bigger number means more sensitivity
const boost_duration = 1200 // in milliseconds


export const  find_bpm = (leftShoulderY,rightShoulderY,leftShoulderX,rightShoulderX,time) => {
    let shoulderY = Math.round((leftShoulderY+rightShoulderY)/2 );
    let shoulderX = Math.abs(leftShoulderX - rightShoulderX);

    let threshold = shoulderX / sensitivity
    if (shoulderY<previous_value && ascending){
        if (Math.abs(shoulderY-previous_min_value) > threshold){ //peak found
            actual_bpm = 1000*60/(time-previous_peak_time);
        }
        else{ // standing still
            actual_bpm = 0;
        }
        previous_peak_time=time;
        ascending= false;
    }
    else if (shoulderY<previous_value && !(ascending)){
        previous_value = shoulderY;
    }
    else if (shoulderY> previous_value && ascending){
        previous_value = shoulderY;
    }
    else {
        previous_min_value = previous_value
        previous_value=shoulderY;
        ascending=true;
    }
    
    return actual_bpm;
}



export const is_boost_active = (leftWristY, rightWristY,rightShoulderY,leftShoulderY, time) => {
    let shoulderY = Math.round((leftShoulderY+rightShoulderY)/2 );
    let wristY = Math.round((leftWristY+rightWristY)/2 );
    let boost = false;
    // console.log("wrist: %s  shoulder: %s",wristY)

    if (wristY> shoulderY){ //we are doing jumping jacks
        boost = true;
        previous_boost_time = time;
    }
    else{
        if (time > previous_boost_time + boost_duration){ // still boosted
            boost = true;
        }
        else{
            boost = false;
        }
    }
    return boost
}

