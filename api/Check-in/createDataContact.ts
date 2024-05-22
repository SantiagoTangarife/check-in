import { parseApiUrl } from "./endPoints";

export const createDataContact = async ( dataContact: any ) => {
    try {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataContact)
        }
        const response = await fetch(parseApiUrl('dataContact'), config)
        if(response.status === 201){
            return {
                responseMessage:"¡Datos guardados con éxito!",
                responseStatus: response.status
            }
        } else {
            return {responseMessage:"Ha ocurrido un error, consulte con el administrador"}
        }
    } catch (error) {
        console.log(error);
    }
};