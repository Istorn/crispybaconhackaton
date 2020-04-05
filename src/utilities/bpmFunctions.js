let actual_bpm = 60;
let previous_peak_time = 0;
let ascending = true;
let previous_value = 80;
let previous_min_value = 0;

const find_bpm = (leftShoulderY,rightShoulderY,leftShoulderX,rightShoulderX,time) => {
    let shoulderY = Math.round((leftShoulderY+rightShoulderY)/2 );
    let shoulderX = Math.abs(leftShoulderX - rightShoulderX);

    let threshold = shoulderX / 17 //modify this number. Bigger number means more sensitivity

    if (shoulderY<previous_value && ascending){
        if (Math.abs(shoulderY-previous_min_value) > threshold){ //peak found
            actual_bpm = 1000*60/(time-previous_peak_time);
        }
        else{ // standing still
            console.log("%s lower than %s", Math.abs(shoulderY-previous_min_value),threshold)
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

export default find_bpm;

