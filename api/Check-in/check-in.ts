import { parseApiUrl } from "./endPoints";

export const getReservation = async (lastName: string, reservationNumber: string) => {
    try {
        const config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(parseApiUrl('checkin',lastName,reservationNumber), config)
        const json = await response.json()
        if(response.status === 200){
            const message = json;
            return {
                message,
            };
        }
    } catch (error) {
        console.log(error);
    }
};
