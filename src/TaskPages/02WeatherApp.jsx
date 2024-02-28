import React, { useState } from "react";
import Styles from "./WeatherApp.module.css";
import axios from "axios";

const WeatherApp = () => {
    const [city,setCity] = useState('')
    const [data,setData] = useState(null)
     const api_Keys = "12b9a1319cfecd112b0bbdcb988a70ec"
    const onClickHandle = async() => {
         try {
             const fetchData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${api_Keys}`)
              setData(fetchData.data)
              console.log(fetchData.data.weather[0].description);

               
              console.log(fetchData.data.weather);
            
         } catch (error) {
             console.log("fetching data error",error);
         }
    }   
    

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-6">
          <div className={Styles.card}>
             <div className={Styles.btnInput}>
                 <input type="text" placeholder=" Enter City Name"   value={city} onChange={(e) => {setCity(e.target.value)}} className={Styles.inputdata}/>
                 <button className={Styles.weatherBtn} onClick={onClickHandle}>Check Weather</button>
             </div>
             {data != null &&(
                 <div  className={Styles.dynamicdiv}>
                     <ul>
                         <li>city name : {data.name}</li>
                         <li>city description :{data.weather[0].description} </li>
                     </ul>
                 </div>
             )
                
             }
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
