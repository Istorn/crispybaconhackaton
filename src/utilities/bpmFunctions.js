let actual_bpm = 60;
let previous_peak_time = 0;
let ascending = true;
let previous_value = 80;
let previous_min_value = 0;

let previous_bpm_time = 0
let previous_bpm = 0

let previous_boost_time = Date.now();

const sensitivity =  17 //modify this number. Bigger number means higher sensitivity
const boost_duration = 1200 // in milliseconds


export const  find_bpm = (leftShoulderY,rightShoulderY,leftShoulderX,rightShoulderX,leftShoulderYScore,rightShoulderYScore,time) => {
    if ( (leftShoulderYScore<0.6) || (rightShoulderYScore <0.5)){ // shoulders not visible
        if (time - previous_peak_time > 600){
            actual_bpm = 0;
        }
    }
    else{ //shoulders visible
        let shoulderY = Math.round((leftShoulderY+rightShoulderY)/2 );
        let shoulderX = Math.abs(leftShoulderX - rightShoulderX);

        let threshold = shoulderX / sensitivity
        if (shoulderY<previous_value && ascending){
            if (Math.abs(shoulderY-previous_min_value) > threshold){ //peak found
                actual_bpm = 1000*60/(time-previous_peak_time);
            }
            else{ // standing still
                if (time - previous_peak_time > 500){
                    actual_bpm = 0;
                }
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
    }
    console.log(actual_bpm)
    return actual_bpm;
}

export const smooth_bpm = (bpm, time) => {
    let sf; // smoothing factor
    // // if (time - previous_bpm_time > 1500){
    // //     sf = 0.95;
    // // }
    // // else{
    // //     sf = time/1000 * 0.4;
    // // }
    sf = 0.001
    previous_bpm = bpm;
    previous_bpm_time = time;
    return (1-sf)*previous_bpm + (sf)*actual_bpm;
    return bpm;

}



export const is_boost_active = (leftElbowY, rightElbowY,rightShoulderY,leftShoulderY,  time) => {
    let shoulderY = Math.round((leftShoulderY+rightShoulderY)/2 );
    let elbowY = Math.round((leftElbowY+rightElbowY)/2 );
    let boost = false;

    if (elbowY > shoulderY){ //not doing jumping jacks
        if (time < previous_boost_time + boost_duration){ // still boosted because it happened 1.2 s ago
            boost = true;
        }
        else{
            boost = false;
        }
    }
    else {   //we are doing jumping jacks
        boost = true;
        previous_boost_time = time;
    }

    return boost
}

