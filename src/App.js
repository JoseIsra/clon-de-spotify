import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi(); //poderoso objeto para controlar funciones 


function App() {

  const [{user, token},dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const theToken = hash.access_token;

    if(theToken) {

      dispatch({
        type:'SET_TOKEN',
        token:theToken
      });        
        spotify.setAccessToken(theToken);

        spotify.getMe()
        .then((user) => {
          dispatch({
            type:'SET_USER',
            user
          });
        });

          //pull data from spotify
          spotify.getUserPlaylists().then((playlists)=>{
            dispatch({
              type:'SET_PLAYLISTS',
              playlists
            });
            });

            spotify
            .getPlaylist('2GipY7QgLEWLisUfnV5LSl')
            .then(response=>{
                dispatch({
                  type:"SET_MY_PLAYLIST",
                  myplaylist:response
                })
            });


    } 
  }, []);
  
  
  return (
    <div className="app">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
