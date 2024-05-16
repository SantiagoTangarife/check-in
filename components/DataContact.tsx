'use client';
import React, { useState } from 'react';
import TextInput from './Input';
import { useNavigate } from 'react-router-dom';

const Swal = require('sweetalert2')

const DataContact = () => {
    const [nameCompleted, setNameCompleted] = useState('');
    const [numberContact, setNumberContact] = useState('');
    const [illness, setIllness] = useState('');
    const [adress, setAdress] = useState('');
    const [preexistence, setPreexistence] = useState('');
    const navigate = useNavigate();

    const handleValidation = () => {
        if (!nameCompleted || !numberContact || !preexistence && !illness) {
            Swal.fire({
                title: "<span>" + "Error!" + "</span>",
                html: "<span>" + "Por favor, complete todos los campos obligatorios." + "</span>",
                icon: 'error',
                background: '#fff',
                confirmButtonText: 'Ok',
                confirmButtonColor: "#1d9bf0",
            })
            return;
        } else {
            Swal.fire({
                title: "<span>" + "Registro guardado con exito!" + "</span>",
                html: "<span>" + "Hemos guardado tus datos con exito" + "</span>",
                icon: 'success',
                background: '#fff',
                confirmButtonText: 'Ok',
                confirmButtonColor: "#1d9bf0",
            })
            navigate('/pass');
        }
    };

    const handleCancel = () => {
        navigate('/', { replace: true });
    };
    
    return (
       <div className="flex flex-col justify-center text-black items-center h-full bg-white data-container">
                <h1 className="text-3xl font-bold mb-8">Información de contacto</h1>
                <form style={{
                    paddingRight: '1rem',
                    paddingLeft: '1rem',
                }} onSubmit={handleValidation}>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col'>
                            <h2 className='font-bold'>Contacto de emergencia</h2>
                            <div className='flex flex-row gap-2'>
                                    <div className="mb-4 relative">
                                        <p className="text-black text-sm mb-2">Nombre completo del contacto de emergencia*</p>
                                        <TextInput required placeholderValue="Nombre Completo"
                                            value={nameCompleted}
                                            typeInput='text'
                                            onChange={(e) => setNameCompleted(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4 relative">
                                        <p className="text-black text-sm mb-2">Número de teléfono del contacto de emergencia*</p>
                                        <TextInput required placeholderValue="+00 000 000 000"
                                            value={numberContact}
                                            typeInput='number'
                                            onChange={(e) => setNumberContact(e.target.value)}
                                        />
                                    </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='font-bold'>Preexistencia médica</h2>
                            <div className='flex flex-row gap-2'>
                                    <div className="mb-4 relative">
                                        <p className="text-black text-sm mb-2">Preexistencia médica*</p>
                                        <select
                                            id="preexistencia"
                                            name="preexistencia"
                                            className="w-[400px] py-2 px-3 border-b-2 text-gray-600 border-gray-300 focus:border-blue-500 outline-none"
                                            required
                                            value={preexistence}
                                            onChange={(e) => setPreexistence(e.target.value)}
                                        >
                                            <option value="">Seleccione una opción</option>
                                            <option value="si">Sí</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                {preexistence === 'si' &&
                                    <div className="mb-4 relative">
                                        <p className="text-black text-sm mb-2">¿Cuál?</p>
                                        <TextInput required placeholderValue="Indicar enfermedad"
                                                   value={illness}
                                                   typeInput='text'
                                                   onChange={(e) => setIllness(e.target.value)}
                                        />
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-bold'>Dirección de envío de maletas</h2>
                                <div className="mb-4 relative">
                                    <p className="text-black text-sm mb-2">Dirección de envío de maletas</p>
                                    <TextInput placeholderValue="Direccion de envio de maletas"
                                        value={adress} required
                                        typeInput='text'
                                        onChange={(e) => setAdress(e.target.value)}
                                    />
                                </div>
                        </div>


                        <div className='flex flex-row justify-center gap-4'>
                            <button type="submit" className="white-button"  onClick={(handleCancel)}>Cancelar</button>
                            <button type="submit" className="blue-button" style={{width: "23%"}}>Guardar</button>
                        </div>
                    </div>
                </form>
        </div>) 
        
                            }

export default DataContact;
