export const API_RM = {
    URL: "https://rickandmortyapi.com/api", //URL BASE PARA LA API
    CHARACTERS: function () {
        return `${this.URL}/character`
    },

    // CHARACTER_BY_ID:function () {
    //     `${this.URL}/character/${id}`
    // }

}