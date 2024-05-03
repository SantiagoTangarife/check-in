"use client";
import React, { useState } from 'react';
import { FaPlaneDeparture } from 'react-icons/fa';
import  TextInput  from "./Input"
import {match} from "../data/data"
import DataContact from '@/components/DataContact';


const Main = () => {
    const [reservationNumber, setReservationNumber] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');
    const [showDataContact, setShowDataContact] = useState(false);

    const handleStartCheckIn = () => {
        
        // Busca coincidencias en la lista 
        const matc = match.find(item => item.lastName === lastName && item.reservationNumber === reservationNumber);

        if (matc) {
            
            console.log('¡Coincidencia encontrada!');
            setError('Ups! No se encontró ninguna coincidencia.');
            setShowDataContact(true); // Mostrar Checking si hay una coincidencia
            
        }
    };
    
    return (
        <>
        {!showDataContact ? ( // Mostrar Main si showChecking es falso
          
        <form className="flex flex-col items-center h-screen justify-center ">
        <div className="emoji-circular">
            <FaPlaneDeparture size={80} />
        </div>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Check-In</h1>
        <span style={{ fontSize: '15px', fontWeight: 'bold' }}>
        Para iniciar el proceso, ingrese su código de reserva y apellido(s).
        </span>

        <div className="input-group justify-center" >
        <TextInput required placeholderValue="Código de reserva" 
            value={reservationNumber}
            typeInput='text'
            onChange={(e) => setReservationNumber(e.target.value)}
    />  

        <span style={{ fontSize: '10px', fontWeight: 'bold' }}>Debe ser alfanumérico (Ejemplo: AAA000). </span>
        
        <TextInput required placeholderValue="Apellido(s)" 
        value={lastName}
        typeInput='text'
        onChange={(e) => setLastName(e.target.value)}
    />  
        <span style={{ fontSize: '10px', fontWeight: 'bold' }}>Ingrese su(s) apellido(s), tal como aparecen registrados en la reserva. </span>
        </div> 

        {error && <p style={{ color: 'red' }}>{error}</p>}


        <button type="submit" className="blue-button" onClick={handleStartCheckIn}>EMPEZAR CHECK-IN</button>
    </form>  
    ) : (
        <DataContact />
      )}
    </>
       
    )
}

export default Main