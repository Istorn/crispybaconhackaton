import axios from 'axios';

const gatherData = (dataToAdd) => {
    console.log(dataToAdd);
    
    const nowDateAndTime= new Date();
    let valuesArray=[];
    dataToAdd.forEach((value)=>{
        console.log(value.part);
        valuesArray.push({
            x: value.position.x,
            y: value.position.y,
            bodyPart: value.part,
            score: value.score,
            date: nowDateAndTime.getDate()+"/"+(nowDateAndTime.getMonth()+1)+"/"+nowDateAndTime.getFullYear(),
            time:nowDateAndTime.getHours()+":"+nowDateAndTime.getMinutes()+":"+nowDateAndTime.getSeconds()+":"+nowDateAndTime.getMilliseconds()
        });
        
          


        
        
    })
    axios.post("http://localhost:3001/data/",...valuesArray).then(resp => {

            console.log(resp.data);
        }).catch(error => {
        
            console.log(error);
        });
    
}


export default gatherData;