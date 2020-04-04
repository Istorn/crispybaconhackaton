import axios from 'axios';



const padStart = (value)=>{
    if (value.length<2)
        return "0"+value;
}

const gatherData = async  (dataToAdd) => {
    console.log(dataToAdd);
        
    
    

    let arrayToSave=[];
    const result= await dataToAdd.forEach((value)=>{

        arrayToSave.push({
            x: value.keypoint.position.x,
            y: value.keypoint.position.y,
            bodyPart: value.keypoint.part,
            score: value.keypoint.score,
            date: value.nowDateAndTime.date,
            time:value.nowDateAndTime.time
        });
        
        
    
          

    
        
        
    })
    axios.post("http://localhost:3001/data/",arrayToSave)


    
}


export default gatherData;