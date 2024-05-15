"use client";

import React, { useEffect } from 'react';
import QRCode from 'qrcode';
import { FaPlaneDeparture } from 'react-icons/fa';
import { FaBriefcase, FaSuitcase } from 'react-icons/fa';
import {User} from "../data/dataCard"

const Card = () => {

    useEffect(() => {
        const user = User[0];
        const qrText = Object.values(user).join(' - ');
        const size = 200;
        const canvas = document.getElementById('canvas');
        if (canvas instanceof HTMLCanvasElement) {
            // Establece el tamaño del canvas
            canvas.width = size;
            canvas.height = size;
    
            // Genera el código QR en el canvas con la nueva dimensión
            QRCode.toCanvas(canvas, qrText, function (error) {
                if (error) {
                    console.error(error);
                } else {
                    console.log('Código QR generado con éxito.');
                }
            });
        } else {
            console.error('Elemento canvas no encontrado en el DOM.');
        }
    }, []);
    const user = User[0];
    return (
        <div className='info-container2 items-center justify-center bg-white px-3  w-full text-black'>
        <div className="card">
            <div className="card-header h2 info-container " style={{display: 'flex', justifyContent: 'center'}}>
                <span className="font-bold "style={{ marginRight: '20px' }}>{user.Operator}</span>
                 <span><FaPlaneDeparture size={50} /></span>
                
            </div>
            <div className="card-body">
                <div className="info-container2 my-4">
                <span>Nombre del pasajero</span>
                <span>{user.name} {user.lastName}</span>
            </div>


            <div className="tabla my-4"  >
                <div className="fila2 text-center font-bold" >
                    <span>Hora en la Sala</span>
                    <span>Grupo</span>
                    <span>Asiento</span>
                </div>
                <div className="fila2 text-center">
                    <span>{user.TimeRomm}</span>
                    <span>{user.Group}</span>
                    <span>{user.Seat}</span>
                </div>
            </div>

            <h1 className=' text-gray-600 my-1 text-center'>Verifica la sala en las pantallas del aereopuerto</h1>
            
            <div className="fila">
            <div className="columna">
                <div className="linea-azul">
                    
                </div>
            </div>
            <div className="columna">
                <div className="emoji-container">
                    <span ><FaPlaneDeparture size={15} color="blue"/></span>
                </div>
            </div>
            <div className="columna">
                <div className="linea-azul">
                    
                    </div>    
            </div>
        </div>
        <div className=' flex justify-between'>
        <div className="informacion flex-grow-1">
            <p style={{ fontWeight: 'bold' }}>{user.Origin3}</p>
            <p style={{ fontSize: '10px' }} >{user.DateO}</p>
            <p style={{ fontSize: '10px' }}>{user.Origin}</p>
        </div>
        <div className="informacion flex-grow-1 my-2">
                <p style={{ fontWeight: 'bold' }}>{user.Destination3}</p>
                <p style={{ fontSize: '10px' }} >{user.DateD}</p>
                <p style={{ fontSize: '10px' }}>{user.Destination}</p>
            </div>
            </div>


        {/* AQUI SE CREA EL QR */}
        <div className=" my-2" style={{display: 'flex', justifyContent: 'center'} }>
            <canvas id="canvas"></canvas>
        </div>


            <span style={{ fontWeight: 'bold' }}>SU TARIFA ES </span>
            <span style={{ fontWeight: 'bold' }}>{user.Fee}</span>


            <div className=' flex my-5'>
                <div className="informacion flex-grow-1 mx-3">
                <FaBriefcase size={60} />
                </div>
                <div className="flex-grow-1">
                        <p>Equipaje de mano</p>
                        <p  >SI/YES</p>
                        <div className='info-container2'>
                        <div className='info-container'>
                        <span >Reserva: </span>
                        <span style={{ fontWeight: 'bold' }}>{user.reservationNumber}</span></div>
                        <div className='info-container'>
                        <span >VIAJERO FRECUENTE </span>
                        <span style={{ fontWeight: 'bold' }}>{user.FrequentTraveler}</span></div></div>

                    </div>
            </div>

            <div className=' flex'>
                <div className="informacion flex-grow-1 mx-3">
                <FaSuitcase size={60} />
                </div>
                <div className="flex-grow-1">
                        <p>Equipaje de bodega</p>
                        <p  >1x23Kg</p>
                        
                        <div className='info-container'>
                        <span >Operado por: </span>
                        <span style={{ fontWeight: 'bold' }}>{user.Operator}</span></div>

                        <div className='info-container2'>
                        <div className='info-container'>
                        <span >Vendido por </span>
                        <span style={{ fontWeight: 'bold' }}>{user.Seller}</span>
                        </div>
                        <div className='info-container'>
                        <span >status</span>
                        <span style={{ fontWeight: 'bold' }}>{user.status}</span>
                            </div>
                        </div>

                    </div>
            </div>
       




        </div>

                </div>
                
                <div className="flex justify-center items-center ">
                    <button className="blue-button">
                        Continuar
                    </button>
                </div>
                </div>
    );
};


export default Card;