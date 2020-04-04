import axios from 'axios';



const padStart = (value)=>{
    if (value.length<2)
        return "0"+value;
}

const gatherData = async  (dataToAdd) => {
    console.log(dataToAdd);
        
    
    

    let arrayToSave=[];
    const result= await dataToAdd.forEach((value)=>{

        axios.post("https://lorenzoneri.com/crispyAPIGather.php",{
            x: value.keypoint.position.x,
            y: value.keypoint.position.y,
            bodyPart: value.keypoint.part,
            score: value.keypoint.score,
            date: value.nowDateAndTime.date,
            time:value.nowDateAndTime.time
        }).then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
        
        arrayToSave.push({
            x: value.keypoint.position.x,
            y: value.keypoint.position.y,
            bodyPart: value.keypoint.part,
            score: value.keypoint.score,
            date: value.nowDateAndTime.date,
            time:value.nowDateAndTime.time
        });
        
        
    
          

    
        
        
    })
    


    
}


export default gatherData;