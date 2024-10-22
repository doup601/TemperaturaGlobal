import { useState,useEffect } from "react"
import SensorChart from '../../components/Sensor/Sensor'
import SensorChart2 from '../../components/Sensor/Sensor'
import '../../../src/Graficos.css'

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
        <h1 className="gh1">Gráficos</h1>
        <p className="gp1">Aqui estão alguns gràficos das temperaturas recentes de alguns Países/cidades pelo mundo</p>
        <p className="gp2">(Números meramente ilustrativos)</p>
        <h3 className="gh3b">Brasil(São Paulo)</h3>
        <SensorChart data={temperatura}/>
        <h3 className="gh3a">Alemanha(Berlim)</h3>
        <Graficos2/>
        <h3 className="gh3r">Rússia(Moscou)</h3>
        <Graficos3/>

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

const Graficos3=()=>{

    const [temperatura3, setTemperatura]=useState([])


    useEffect(()=>{
        fetch("http://localhost:5000/temperatura3/")
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
        <SensorChart data={temperatura3}/>

        </>
    )

    
}
export {Graficos3}