import '../css/App.css';
import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import { useLocation } from "react-router-dom";
import { Link, scrollTo } from 'react-scroll'
import Slide from '@mui/material/Slide';


import Formations from './Formations';
import Competences from './Competences';
import Projets from './Projets';
import Contacts from './Contacts';
import SideBar from './SideBar'

function Cv() {
  const [active, setActive] = useState("")  
  const { pathname, hash, key } = useLocation();

return (
    <div className ="Background">

        <div className="NavMenu">
        <p className={active+"Indicator"}/>

        <p className={active === 'formations'? "NavLinkActive": "NavLink"} >
          <Link className='NavLink' to='formations' spy={true} smooth={true} offset={0} onSetActive={()=>{setActive('formations')}}>
            Formations
          </Link>
        </p>
        <p className={active === 'competences'? "NavLinkActive": "NavLink"}>
          <Link className='NavLink' to='competences' spy={true} smooth={true} offset={60} onSetActive={()=>{setActive('competences')}}>
            Competences 
          </Link>
        </p>
        <p className={active === 'projets'? "NavLinkActive": "NavLink"}>
          <Link className='NavLink' to='projets' spy={true} smooth={true} offset={60} onSetActive={()=>{setActive('projets')}}>
            Projets
          </Link>
        </p>
        <p className={active === 'contacts'? "NavLinkActive": "NavLink"}>
        
          <Link className='Link' to='contacts' spy={true} smooth={true} offset={0} onSetActive={()=>{setActive('contacts')}}>
            Contacts
          </Link>
        </p>
    </div>
    <SideBar/>
    <div className = "CV">
      <Formations />
      <Competences active={active} />
      <Projets id="gne"/>
      <Contacts/>
      </div>
      </div>

  );
}


export default Cv;
