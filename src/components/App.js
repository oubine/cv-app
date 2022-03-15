import '../css/App.css';
import '../css/Accueil.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'

import Slide from '@mui/material/Slide';

import cadre from '../images/cadre.png'; 
import picture from '../images/picture.png'; 
import Rectangle from '../images/Rectangle.png';

function App() {

  const [open, setOpen]  = useState(false)
  const [hover, setHover] = useState(false)
  useEffect(()=>{console.log(hover)})
  return (
    <div className="App">
      <header className="App-header">
        <div className ="SideMenu" >
          <button className ="Menu" onMouseEnter={()=>setOpen(true)}>
            MENU
          </button>
          </div>   
            <Slide direction="left"  mountOnEnter unmountOnExit in={open}>
              <div className ="SideMenuOpen" >
                <p>
                  <Link 
                    className='Link'
                    to={{
                      pathname: "/cv",
                      hash: "formations",
                    }}>
                    FORMATIONS
                  </Link>
                </p>
                <p>
                  <Link className='Link' to='/cv' >
                    COMPETENCES
                  </Link>
                </p>
                <p>
                  <Link className='Link' to='/cv' >
                    PROJETS
                  </Link>
                </p>
                <p>
                  <Link className='Link'
                    to={{
                      pathname: "/cv",
                      hash: "contacts",
                  }}>
                    CONTACTS
                  </Link>
                </p>

         </div>
      </Slide>
       <div className="PicturesAccueil">
    <img src={picture} className="PhotoAccueil" width={300}  alt="oubine" />
      <div classname="ICI" onMouseLeave={()=>setHover(false)} onMouseEnter={()=>setHover(true)}>
    <img src={Rectangle} className="CadreAccueil1" width={330} height={630} alt="oubine" />
    <img src={Rectangle} className="CadreAccueil2" width={310} height={660} alt="oubine" />
    </div>
    </div>
    <div className="TitleAccueil">
        <p className="OubineAccueil">
    Oubine
    </p>
        <p className="PERRINAccueil">
    PERRIN
    </p>

     
      <p className="AboutAccueil">

Recherche premier emploi <br/>
d’ingénieure dans le domaine de <br/> 
l’UXD et du développement web
      </p>
    </div>
      </header>
    </div>
  );
}

export default App;
