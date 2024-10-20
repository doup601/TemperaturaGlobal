import { useState,useEffect } from "react"
import SensorChart from '../../components/Sensor/Sensor'
import SensorChart2 from '../../components/Sensor/Sensor'

const Graficos=()=>{

    const [temperatura, setTemperatura]=useState([])


    useEffect(()=>{
        fetch("http://localhost:5000/temperatura/")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setTemperatura(res)
            
        }).catch((error)=>{
            console.log(error)
        })
    })

    return(
        <>
        <h1>Gráficos</h1>
        <SensorChart data={temperatura}/>
        <Graficos2/>

        </>
    )

    
}
export default Graficos

const Graficos2=()=>{

    const [temperatura2, setTemperatura]=useState([])


    useEffect(()=>{
        fetch("http://localhost:5000/temperatura2/")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setTemperatura(res)
            
        }).catch((error)=>{
            console.log(error)
        })
    })

    return(
        <>
        <SensorChart2 data={temperatura2}/>

        </>
    )

    
}
export {Graficos2}