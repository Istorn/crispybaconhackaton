let actual_bpm = 60;
let previous_peak_time = 0;
let ascending = true;
let previous_value = 80;

const find_bpm = (newValue,time) => {
    if (newValue<previous_value && ascending){
        actual_bpm = 60/(time-previous_peak_time);
        previous_peak_time=time;
        ascending= false;
    }
    else if (newValue<previous_value && !(ascending)){
        previous_value = newValue;
    }
    else if (newValue> previous_value && ascending){
        previous_value = newValue;
    }
    else {
        previous_value=newValue;
        ascending=true;
    }
    
    return actual_bpm*1000;
}

export default find_bpm;

