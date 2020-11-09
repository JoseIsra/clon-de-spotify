export const estadoInicial = {
    user: null,
    playlists: [],
    playing: false,
    item : null,
    //no olvides remover la llave luego de terminar
      //token:"BQB6b-7psx0vZrjpUyJrAaGVmp4SKhNrzLmFSOhQ6KfEBwSY5bG7xOKY8q0fDB-_dT25iJ5Fn0er8XPijUnAkreOMtBcR9tZgKwVgdDRqlPRhNm5zX7vEtGumV5bIyfGgiWckBqJ2Ywy1TqbCGci3nFbmc8EYg4XzHVoqVjXIsm3JFIQ"
}


const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER': 
        return {
            ...state,
            user: action.user
        };break;
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            };break;
            
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_MY_PLAYLIST':
            return{
                ...state,
                myplaylist:action.myplaylist
            }

        default:
            return state;
    }

}

export default reducer;