import axios from 'axios';



const gatherData = async  (dataToAdd) => {
    console.log(dataToAdd);
        
    const nowDateAndTime= new Date();
    

    let arrayToSave=[];
    const result= await dataToAdd.forEach((value)=>{

        arrayToSave.push({
            x: value.position.x,
            y: value.position.y,
            bodyPart: value.part,
            score: value.score,
            date: nowDateAndTime.getDate()+"/"+(nowDateAndTime.getMonth()+1)+"/"+nowDateAndTime.getFullYear(),
            time:nowDateAndTime.getHours()+":"+nowDateAndTime.getMinutes()+":"+nowDateAndTime.getSeconds()+":"+nowDateAndTime.getMilliseconds()
        });
        
        
    
          


        
        
    })
    axios.post("http://localhost:3001/data/",arrayToSave)


    
}


export default gatherData;