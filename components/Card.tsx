import React from 'react';
import { FaPlaneDeparture } from 'react-icons/fa';
import { FaBriefcase, FaSuitcase } from 'react-icons/fa';



const Card = () => {

    return (
        <div className='info-container2'>
        <div className="card">
            <div className="card-header h2 info-container">
                <span>Título de la Tarjeta</span>
                 <span><FaPlaneDeparture size={50} /></span>
                
            </div>
            <div className="card-body">
                <div className="info-container2 my-4">
                <span>Nombre del pasajero</span>
                <span>hbg12</span>
            </div>


            <div className="tabla my-4">
                <div className="fila2 text-center font-bold">
                    <span>Hora en la Sala</span>
                    <span>Grupo</span>
                    <span>Asiento</span>
                </div>
                <div className="fila2 text-center">
                    <span>12:00</span>
                    <span>C</span>
                    <span>C4</span>
                </div>
            </div>

            <h1 className=' text-gray-600 my-1'>Verifica la sala en las pantallas del aereopuerto</h1>
            
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
            <p style={{ fontWeight: 'bold' }}>VUP</p>
            <p style={{ fontSize: '10px' }} >vier. 29 mar | 17:05</p>
            <p style={{ fontSize: '10px' }}>Vaupes, terminal</p>
        </div>
        <div className="informacion flex-grow-1 my-2">
                <p style={{ fontWeight: 'bold' }}>BOG</p>
                <p style={{ fontSize: '10px' }} >vier. 29 mar | 19:05</p>
                <p style={{ fontSize: '10px' }}>Bogota, el dorado, terminal</p>
            </div>
            </div>


        {/* AQUI SE CREA EL QR */}
        <div style={{ marginTop: '100px', marginBottom: '100px' }}></div>

            <span style={{ fontWeight: 'bold' }}>SU TARIFA ES </span>
            <span style={{ fontWeight: 'bold' }}>Clasic</span>


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
                        <span style={{ fontWeight: 'bold' }}>NPI76</span></div>
                        <div className='info-container'>
                        <span >VIAJERO FRECUENTE </span>
                        <span style={{ fontWeight: 'bold' }}>SI/NO</span></div></div>

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
                        <span style={{ fontWeight: 'bold' }}>Singapur Airlines</span></div>

                        <div className='info-container2'>
                        <div className='info-container'>
                        <span >Vendido por </span>
                        <span style={{ fontWeight: 'bold' }}>xxxx</span>
                        </div>
                        <div className='info-container'>
                        <span >status</span>
                        <span style={{ fontWeight: 'bold' }}>xxxx</span>
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