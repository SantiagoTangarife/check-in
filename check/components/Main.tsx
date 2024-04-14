import { Dispatch, SetStateAction } from "react"
import { FaPlaneDeparture } from 'react-icons/fa';
import  TextInput  from "./Input"


const Main = () => {
    return (
    
    <div className="flex flex-col items-center h-screen justify-center ">
        <div className="emoji-circular">
            <FaPlaneDeparture size={80} />
            </div>
                    <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Check-In</h1>
                    <span style={{ fontSize: '15px', fontWeight: 'bold' }}>
                    Para iniciar el proceso, ingrese su código de reserva y apellido(s).
                    </span>

                    <div className="input-group justify-center" >
                    <TextInput placeholderValue="Código de reserva" />  
                    <span style={{ fontSize: '10px', fontWeight: 'bold' }}>Debe ser alfanumérico (Ejemplo: AAA000). </span>
                   
                    <TextInput placeholderValue="Apellido(s)" />  
                    <span style={{ fontSize: '10px', fontWeight: 'bold' }}>Ingrese su(s) apellido(s), tal como aparecen registrados en la reserva. </span>
                    </div> 

                    <button className="blue-button">EMPEZAR CHECK-IN</button>
                    </div>  
       
    )
}

export default Main