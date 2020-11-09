import React from 'react';
import './Header.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{user}, dispatch] = useDataLayerValue();
    console.log(user);
    return (
        <div className="header">
            <div className="header__left">
                <ArrowBackIosIcon />
                <ArrowForwardIosIcon />
            </div>
            <div className="header__right">
                <div className="header__right__button">
                    <button >PREMIUM</button>
                </div>
                
                <div className="header__right__user">
                    <Avatar  src={user?.images[0]?.url} 
                    alt="imagenUser" />
                        <h4>{user?.display_name}</h4>
                    

                </div>
            </div>
        </div>


    )


}


export default Header;