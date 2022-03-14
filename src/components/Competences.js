import '../css/App.css';
import '../css/Competences.css';

import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import {
  useNavigate
} from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { alpha, styled, withStyles } from '@mui/styles';
import handleViewport from 'react-in-viewport';
import VisibilitySensor from 'react-visibility-sensor';


const MyLinearProgress = withStyles({
  root: {
    height: 3,
    backgroundColor: '#E7EEFF',
  },
  bar: {
    backgroundColor: '#BADB73',
  },
})(LinearProgress);



function LangageLinearProgress(props) {
  
  const [visibility, setVisibility] = useState(false)
  



  return (
          <VisibilitySensor
          partialVisibility
        onChange={() => {
          setVisibility(!visibility)
        }}
      >
     <div className="LangageLinearProgress">
          <div>{props.title}</div>
          <div className="LinearProgressValue">{props.value}%</div>
          <div className="LinearProgress">
            <Box sx={{ width: '100%' }}>
              <MyLinearProgress variant="determinate" value={props.value} />
            </Box>
          </div>
        </div>
</VisibilitySensor>

    );
}


function Competences(props) {
  const [progressJS, setProgressJS] = useState(0)
  const [progressPython, setProgressPython] = useState(0)
  const [progressC, setProgressC] = useState(0)
  let JSTimer = 0
  let CTimer = 0
  let PythonTimer = 0
  
  useEffect(() => {
      if (props.active=== "competences") {
        if (progressJS < 90) {
          JSTimer = setTimeout(() => setProgressJS((z) => z + 1), 1); 
        }
        if ( progressPython < 80) {
          PythonTimer =setTimeout(() => setProgressPython((r) => r + 1), 1); 
        }
        if (progressC < 75) {
          CTimer =setTimeout(() => setProgressC((d) => d + 1), 1);  
        }
      }
      else {
      }


return () =>{
  clearTimeout(CTimer)
  clearTimeout(JSTimer)
  clearTimeout(PythonTimer)

} ;

});




return (
    <div className ="Background" id="competences">
      <div className="Page" >
      <p className="Title">
        Competences
      </p>
      <div className="Competences">
      <div>
        <div className="SectionTitle">INFORMATIQUES</div>
        

        <LangageLinearProgress title="Javascript/HTML/CSS" value={progressJS}/>
        <LangageLinearProgress title="Python" value={progressPython}/>
        <LangageLinearProgress title="C#/C/C++" value={progressC}/>
      </div>
      <div className="Theoriques">
        <p className="SectionSubTitle">Théoriques:</p>
        <div className ="TheoriquesListe"> 
          Recherche opérationnelle, optimisation combinatoire, structures de
          données, calcul formel et algorithmes, analyse numérique, architectures
          de réseaux informatiques
        </div>
      </div>
      <div className="Theoriques2">
        <p className="SectionSubTitle">Logiciels:</p>
        <div className="TheoriquesListe">
          Unity, Git, Visual Studio,
          Photoshop, Illustrator, Excel,
          Sketch, Figma.
        </div>
      </div>
      <div className="SciencesSHS">
      <p className="Hutech">
        <p className="SectionTitle">SCIENCES HUMAINES & SOCIALES</p>
        <div className="HuTechTitle">
          <p className="Date">2016-2019</p><p className="SectionSubTitle2"> Parcours <span className="Emphasize">HuTech</span> - Humanité et Technologies  </p>
        </div>
        <div className="HutechDescription">
          Ce cursus en parallèle du cursus scientifique classique d’entré à l’UTC et amène des connaissances
          supplémentaires en SHS. Le but de cette formation est de développer une vision de
          l’ingénierie qui hybride la technique et les sciences humaines grâce à des enseignements dans
          les domaines suivants: <span className="Emphasize">Histoire des Techniques, Philosophie, Philosophie du travail,
          Analyse de la valeur </span>etc. Ces enseignements allient à la fois des travaux de dissertation et de
          recherche bibliographique.
        </div>
      </p>
      <p className="Langues">
        <p className="SectionSubTitle">Langues:</p>
       <div className="LanguesListe">
        <ul>
        <li>Coréen: courant
        </li>
        <li>Anglais: expérimenté (C1)
        </li>
        <li>Espagnol: bases (B2)
        </li>
        </ul>
       </div>

      </p>
      </div>
      </div>
      
      </div>
      </div>

  );
}


export default Competences;
