import '../css/App.css';
import React, {
  useState
} from 'react';
import Slide from '@mui/material/Slide';
import picture from '../images/picture.png'; // Tell webpack this JS file uses this image
import cadre from '../images/cadre.png'; // Tell webpack this JS file uses this image


function SideBar() {

return (
    <div className ="SideBackground">
    <div className="Pictures">
    <img src={picture} className="Photo" width={180}  alt="oubine" />
    <img src={cadre} className="Cadre" width={210} height={420} alt="oubine" />
    </div>
   <div className="Description">
   <a className="Link" href="https://www.linkedin.com/in/oubine-perrin" target="_blank">
    <p className="Oubine">
    Oubine
    </p>
        <p className="PERRIN">
    PERRIN
    </p>

     
      <p className="About">

Recherche premier emploi <br/>
d’ingénieure dans le domaine de <br/> 
l’UXD et du développement web
      </p>
          </a>
      </div>
      </div>

  );
}


export default SideBar;
