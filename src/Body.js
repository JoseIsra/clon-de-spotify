import React from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import SongRow from './SongRow';

function Body({ spotify }) {
    const [{ myplaylist }] = useDataLayerValue();
    console.log(myplaylist)
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={myplaylist?.images[0].url}
                />
                <div className="body__infoMusic">
                    <strong >PLAYLIST</strong>
                    <h2>Sia this is acting</h2>
                    <p>{myplaylist?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledOutlinedIcon className="playButton" />
                    <MoreHorizIcon fontSize="large" />
                    </div>

                {myplaylist?.tracks.items.map(item=> (
                    <SongRow track={item.track} />
                ))}

            </div>
        </div>
    )
}

export default Body;