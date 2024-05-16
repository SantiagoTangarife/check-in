"use client";
import React, { useState } from 'react';
import { FaPlaneDeparture } from 'react-icons/fa';
import  TextInput  from "./Input"
import {match} from "../data/data"
import { useNavigate } from 'react-router-dom';


const Swal = require('sweetalert2')

const Main = () => {
    const [reservationNumber, setReservationNumber] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    const handleStartCheckIn = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Busca coincidencias en la lista
        const matc = match.find(item => item.lastName === lastName && item.reservationNumber === reservationNumber);

        if (matc) {
            navigate('/contact');
        }
        else{
            Swal.fire({
                title: "<span>" + "Error!" + "</span>",
                html: "<span>" + "Ups! Revisa tu código de reserva o tus apellidos" + "</span>",
                icon: 'error',
                background: '#fff',
                confirmButtonText: 'Ok',
                confirmButtonColor: "#1d9bf0",
            })
        }
    };
    
    return (
      <div className="flex flex-col items-center h-screen justify-center bg-white px-3 w-full text-black">
          
            <form className="flex flex-col items-center justify-center "
                  onSubmit={handleStartCheckIn}
            >
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

                <button type="submit" className="blue-button">EMPEZAR CHECK-IN</button>

            </form>
       </div>

   
    )
}

export default Main
