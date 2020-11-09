import React from 'react';
import './Footer.css'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import { Grid ,Slider } from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';


function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
            <img className="footer__albumLogo" 
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5d49c464-22ed-49a2-a987-9e6ade065441/d77rqhs-be2234e1-4630-4b6c-a994-e285b5c2bba7.png/v1/fill/w_1024,h_576,q_80,strp/avicii_logo_by_brandonarboleda_d77rqhs-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzYiLCJwYXRoIjoiXC9mXC81ZDQ5YzQ2NC0yMmVkLTQ5YTItYTk4Ny05ZTZhZGUwNjU0NDFcL2Q3N3JxaHMtYmUyMjM0ZTEtNDYzMC00YjZjLWE5OTQtZTI4NWI1YzJiYmE3LnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.G2sMPXR80xTqhBhB1gI6HHbg93jY0AlA0Qr6wtNjARA "  alt="album picture"/>
            <div className="footer__songInfo">
                <h4>Levels</h4>
                <p>Avicci</p>
            </div>
        </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleFilledWhiteOutlinedIcon className="footer__icon" fontSize="large" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>


            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item >
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid  item >
                        <VolumeUpIcon />
                    </Grid>
                    <Grid  item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;