import { parseApiUrl } from "./endPoints";

export const getCardQr = async (lastName: string, reservationNumber: string) => {
    try {
        const config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(parseApiUrl('dataQr',lastName,reservationNumber), config)
        const json = await response.json()
        if(response.status === 200){
            const User = json;
            return {
                User,
            };
        }
    } catch (error) {
        console.log(error);
    }
};
