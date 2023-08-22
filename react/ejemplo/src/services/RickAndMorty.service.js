import { API_RM } from "../constants/Api.constanst";

class RickAndMortyService{
    async getAllCharacters() {
        const response = await fetch(API_RM.CHARACTERS()); 
        //Interceptor a las solicutdes trae todos los personajes
        return response.json(); // Convierto el response a un json
    }

    async getCharacterById(id) {
        const response = await fetch(API_RM.CHARACTER_BY_ID(id)); 
        //Interceptor a las solicutdes trae todos los personajes
        return response.json();
    }


}

export default new RickAndMortyService();