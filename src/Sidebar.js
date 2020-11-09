import React from 'react';
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';


function Sidebar(){
    const [{playlists}, dispatch]= useDataLayerValue();
    console.log(playlists);
    return (
        <div className="sidebar">
        <img className ="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="logo spotify"
            />
            <div className="firstOne">
            <SidebarOption title ="Inicio" Icon={HomeIcon} />
            </div>
            <SidebarOption  title="Buscar" Icon={SearchIcon}/>
            <SidebarOption  title ="Tu Biblioteca" Icon={LibraryMusicIcon} />

            <br />    
            <strong className="sidebarTitle">PLAYLISTS</strong>    
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption  title={playlist.name}  />
            ))}
            
        </div>

    )
}


export default Sidebar;