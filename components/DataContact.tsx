'use client';
import React, { useState } from 'react';
import TextInput from './Input';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './Card';
import Main from './Main';
import { useHistory } from 'react-router-dom';


const DataContact = () => {
    const [nameCompleted, setNameCompleted] = useState('');
    const [numberContact, setNumberContact] = useState('');
    const [illness, setIllness] = useState('');
    const [adress, setAdress] = useState('');
    const [preexistence, setPreexistence] = useState('');
    const [showDataCard, setShowDataCard] = useState(false);
    

    const handleValidation = () => {
        if (!nameCompleted || !numberContact || (preexistence === 'si' && !illness)) {
            toast.error('Por favor, complete todos los campos obligatorios.');
            return;
        } else {
            setShowDataCard(true)
        }
    };

    const handleCancel = () => {
        window.location.reload();
    };
    
    return (
        <>
         
        {
            !showDataCard ? (<div className="flex flex-col justify-center text-black items-center h-screen bg-white">
            <h1 className="text-3xl font-bold mb-8">Información de contacto</h1>
            <div className='flex flex-col gap-2 w-3/4'>
                <div className='flex flex-col'>
                    <h2 className='font-bold'>Contacto de emergencia</h2>
                    <div className='flex flex-row gap-2'>
                        <form className="flex-grow bg-white">
                            <div className="mb-4 relative">
                                <p className="text-black text-sm mb-2">Nombre completo del contacto de emergencia*</p>
                                <TextInput required placeholderValue="Nombre Completo"
                                    value={nameCompleted}
                                    typeInput='text'
                                    onChange={(e) => setNameCompleted(e.target.value)}
                                />
                            </div>
                        </form>
                        <form className="flex-grow bg-white">
                            <div className="mb-4 relative">
                                <p className="text-black text-sm mb-2">Número de teléfono del contacto de emergencia*</p>
                                <TextInput required placeholderValue="+00 000 000 000"
                                    value={numberContact}
                                    typeInput='number'
                                    onChange={(e) => setNumberContact(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-bold'>Preexistencia médica</h2>
                    <div className='flex flex-row gap-2'>
                        <form className="flex-grow bg-white">
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
                        </form>
                        <form className="flex-grow bg-white">
                            <div className="mb-4 relative">
                                <p className="text-black text-sm mb-2">¿Cuál?</p>
                                <TextInput required placeholderValue="Indicar enfermedad"
                                    value={illness}
                                    typeInput='text'
                                    onChange={(e) => setIllness(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold'>Dirección de envío de maletas</h2>
                    <form className="flex-grow bg-white">
                        <div className="mb-4 relative">
                            <p className="text-black text-sm mb-2">Dirección de envío de maletas</p>
                            <TextInput placeholderValue="Direccion de envio de maletas"
                                value={adress}
                                typeInput='text'
                                onChange={(e) => setAdress(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
               

                <div className='flex flex-row justify-center gap-4'>
                    <button type="submit" className="blue-button"  onClick={handleCancel}>CANCELAR</button>
                    <button type="submit" className="blue-button" onClick={handleValidation}>GUARDAR</button>
                </div>
                <ToastContainer />
            </div>
        </div>) : (
        <Card />
      )
        }
        </>
        
    );
};

export default DataContact;