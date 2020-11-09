
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURI= "http://localhost:3000/";

const clientID = "6479ba95ec3442209643982fdf68fc3b";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

//el token de acceso
export const getTokenFromResponse = ()=>{ 
    return window
    .location
    .hash
    .substring(1)
    .split('&').reduce((eltoken,item)=>{
        let seccionesDeURL = item.split('=');
        eltoken[seccionesDeURL[0]]=decodeURIComponent(seccionesDeURL[1]);
        return eltoken;
    },{})
}; 




export const loginURL =`${authEndpoint}?&response_type=token&
client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
    "%20"
    )}&show_dialog=true`;