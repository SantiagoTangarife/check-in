"use client";

import React, {useEffect, useRef, useState} from 'react';

import QRCode from 'qrcode';
import { FaPlaneDeparture } from 'react-icons/fa';
import { FaBriefcase, FaSuitcase } from 'react-icons/fa';
import {User} from "@/data/dataCard";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import {getCardQr} from "@/api/Check-in/cardQR";

interface CardProps {
    lastName: string;
    reservationNumber: string;
}

const Card: React.FC<CardProps> = ({ lastName, reservationNumber }) => {

    const [lastNameCard, setLastName] = useState("");
    const [reservationNumberCard, setReservationNumber] = useState("");
    const [name, setName] = useState("");
    const [TimeRomm, setTimeRomm] = useState("");
    const [Group, setGroup] = useState("");
    const [Seat, setSeat] = useState("");
    const [Origin3, setOrigin3] = useState("");
    const [DateO, setDateO] = useState("");
    const [Origin, setOrigin] = useState("");
    const [Destination3, setDestination3] = useState("");
    const [DateD, setDateD] = useState("");
    const [Destination, setDestination] = useState("");
    const [Operator, setOperator] = useState("");
    const [Seller, setSeller] = useState("");
    const [FrequentTraveler, setFrequentTraveler] = useState("");
    const [Fee, setFee] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {

        const user = User[0];

        fetchData(lastName, reservationNumber);


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
    }, [lastName, reservationNumber]);

    const fetchData = async (lastName: string, reservationNumber: string) => {
        try {
            const response = await getCardQr(lastName, reservationNumber);
            if (response) {
                const User = response.User.User[0];
                setLastName(User.lastName);
                setReservationNumber(User.reservationNumber);
                setName(User.name);
                setTimeRomm(User.TimeRomm);
                setGroup(User.Group);
                setSeat(User.Seat);
                setOrigin3(User.Origin3);
                setDateO(User.DateO);
                setOrigin(User.Origin);
                setDestination3(User.Destination3);
                setDateD(User.DateD);
                setDestination(User.Destination);
                setOperator(User.Operator);
                setSeller(User.Seller);
                setFrequentTraveler(User.FrequentTraveler);
                setFee(User.Fee);
                setStatus(User.status);
            }
        } catch (error) {
            console.error(error);
        }
    };


    const cardRef = useRef(null);

    const createPdf = () => {
        if (cardRef.current) {
            html2canvas(cardRef.current)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
                    const pageWidth = pdf.internal.pageSize.getWidth();
                    const pageHeight = pdf.internal.pageSize.getHeight();

                    const widthRatio = pageWidth / canvas.width;
                    const heightRatio = pageHeight / canvas.height;
                    const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

                    const canvasWidth = canvas.width * ratio * 0.9;
                    const canvasHeight = canvas.height * ratio * 0.9;

                    const x = (pageWidth - canvasWidth) / 2;
                    const y = (pageHeight - canvasHeight) / 2;

                    pdf.addImage(imgData, 'PNG', x, y, canvasWidth, canvasHeight);
                    pdf.save("Tu tarjeta de embarque.pdf");
                });
        }
    }

    return (
        <div className='info-container2'>

                <div className="card"  ref={cardRef}>
                    <div className="card-header h2 info-container " style={{display: 'flex', justifyContent: 'center'}}>
                        <span className="font-bold " style={{marginRight: '20px'}}>{Operator}</span>
                        <span><FaPlaneDeparture size={50}/></span>

                    </div>
                    <div className="card-body">
                        <div className="info-container2 my-4">
                            <span>Nombre del pasajero</span>
                            <span>{name} {lastNameCard}</span>
                        </div>


                        <div className="tabla my-4">
                            <div className="fila2 text-center font-bold">
                                <span>Hora en la Sala</span>
                                <span>Grupo</span>
                                <span>Asiento</span>
                            </div>
                            <div className="fila2 text-center">
                                <span>{TimeRomm}</span>
                                <span>{Group}</span>
                                <span>{Seat}</span>
                            </div>
                        </div>

                        <h1 className=' text-gray-600 my-1 text-center'>Verifica la sala en las pantallas del
                            aereopuerto</h1>

                        <div className="fila">
                            <div className="columna">
                                <div className="linea-azul">

                                </div>
                            </div>
                            <div className="columna">
                                <div className="emoji-container">
                                    <span><FaPlaneDeparture size={15} color="blue"/></span>
                                </div>
                            </div>
                            <div className="columna">
                                <div className="linea-azul">

                                </div>
                            </div>
                        </div>
                        <div className=' flex justify-between'>
                            <div className="informacion flex-grow-1">
                                <p style={{fontWeight: 'bold'}}>{Origin3}</p>
                                <p style={{fontSize: '10px'}}>{DateO}</p>
                                <p style={{fontSize: '10px'}}>{Origin}</p>
                            </div>
                            <div className="informacion flex-grow-1 my-2">
                                <p style={{fontWeight: 'bold'}}>{Destination3}</p>
                                <p style={{fontSize: '10px'}}>{DateD}</p>
                                <p style={{fontSize: '10px'}}>{Destination}</p>
                            </div>
                        </div>


                        {/* AQUI SE CREA EL QR */}
                        <div className=" my-2" style={{display: 'flex', justifyContent: 'center'}}>
                            <canvas id="canvas"></canvas>
                        </div>


                        <span style={{fontWeight: 'bold'}}>SU TARIFA ES </span>
                        <span style={{fontWeight: 'bold'}}>{Fee}</span>


                        <div className=' flex my-5'>
                            <div className="informacion flex-grow-1 mx-3">
                                <FaBriefcase size={60}/>
                            </div>
                            <div className="flex-grow-1">
                                <p>Equipaje de mano</p>
                                <p>SI/YES</p>
                                <div className='info-container2'>
                                    <div className='info-container'>
                                        <span>Reserva: </span>
                                        <span style={{fontWeight: 'bold'}}>{reservationNumberCard}</span></div>
                                    <div className='info-container'>
                                        <span>VIAJERO FRECUENTE </span>
                                        <span style={{fontWeight: 'bold'}}>{FrequentTraveler}</span></div>
                                </div>

                            </div>
                        </div>

                        <div className=' flex'>
                            <div className="informacion flex-grow-1 mx-3">
                                <FaSuitcase size={60}/>
                            </div>
                            <div className="flex-grow-1">
                                <p>Equipaje de bodega</p>
                                <p>1x23Kg</p>

                                <div className='info-container'>
                                    <span>Operado por: </span>
                                    <span style={{fontWeight: 'bold'}}>{Operator}</span></div>

                                <div className='info-container2'>
                                    <div className='info-container'>
                                        <span>Vendido por </span>
                                        <span style={{fontWeight: 'bold'}}>{Seller}</span>
                                    </div>
                                    <div className='info-container'>
                                        <span>status</span>
                                        <span style={{fontWeight: 'bold'}}>{status}</span>
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

                <div className="flex justify-center items-center ">
                    <button className="blue-button" onClick={createPdf}>
                        Descargar PDF
                    </button>
                </div>
        </div>
    );
};


export default Card;