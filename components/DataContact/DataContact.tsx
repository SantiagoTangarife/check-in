import React from 'react';
import Button from '../Button/Button';

const Checking = () => {

    return (
        <div className="flex flex-col justify-center text-black items-center h-screen bg-white">
            <h1 className="text-3xl font-bold mb-8">Información de contacto</h1>
            <div className='flex flex-col gap-2 w-3/4'>

                <div className='flex flex-col'>
                    <h2 className='font-bold'>Contacto de emergencia</h2>
                    <div className='flex flex-row gap-2'>
                        <form className="flex-grow max-w-[calc(50%-10px)] bg-white">
                            <div className="mb-4 relative">
                                <p className="text-black text-sm mb-2">Nombre completo del contacto de emergencia*</p>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder='Nombre completo'
                                    className="w-full py-2 px-3 border-b-2 text-gray-600 border-gray-300 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>
                        </form>

                        <form className="flex-grow max-w-[calc(50%-10px)] bg-white">
                            <div className="mb-4 relative">
                                <p className="text-black text-sm mb-2">Número de telefono del contacto de emergencia*</p>
                                <input
                                    type="number"
                                    id="numeroContacto"
                                    name="nombre"
                                    placeholder='+00 000 000 000'
                                    className="w-full py-2 px-3 border-b-2 text-gray-600 border-gray-300 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>
                        </form>

                    </div>
                </div>


                <div className='flex flex-col'>
                    <h2 className='font-bold'>Preexistencia médica</h2>
                    <div className='flex flex-row gap-2'>
                        <form className="flex-grow max-w-[calc(50%-10px)] bg-white">
                            <div className="mb-4 relative">
                                <p className="text-black text-sm mb-2">Preexistencia médica*</p>
                                <select
                                    id="preexistencia"
                                    name="preexistencia"
                                    className="w-full py-2 px-3 border-b-2 text-gray-600 border-gray-300 focus:border-blue-500 outline-none"
                                    required
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="si">Sí</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </form>

                        <form className="flex-grow max-w-[calc(50%-10px)] bg-white">
                            <div className="mb-4 relative">
                                <p className="text-black text-sm mb-2">¿Cúal?</p>
                                <input
                                    type="text"
                                    id="Enfermedades"
                                    name="Enfermedades"
                                    placeholder='Indicar enfermedad'
                                    className="w-full py-2 px-3 border-b-2 text-gray-600 border-gray-300 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>
                        </form>
                    </div>
                </div>


                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold'>Dirección de envio de maletas</h2>
                    <form className="flex-grow max-w-[calc(50%-10px)] bg-white">
                        <div className="mb-4 relative">
                            <p className="text-black text-sm mb-2">Dirección de envió de maletas</p>
                            <input
                                type="text"
                                id="direccionMaletas"
                                name="direccionMaletas"
                                placeholder='Dirección de envio de maletas'
                                className="w-full py-2 px-3 border-b-2 text-gray-600 border-gray-300 focus:border-blue-500 outline-none"
                                required
                            />
                        </div>
                    </form>
                </div>

                <div className=' flex flex-row justify-center gap-4'>
                    <Button type='primary' text={"CANCELAR"}></Button>
                    <Button type='primary' text={"GUARDAR"}></Button>
                </div>

            </div>

        </div>
    );
};

export default Checking