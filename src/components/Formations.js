import '../css/App.css';
import '../css/Formations.css';

import React, {
  useState,
  useEffect,
} from 'react';
import Slide from '@mui/material/Slide';

const FormationsListe = [
  {
    id:1,
    date: "Février 2022",
    title: "Diplomée d'école d'ingénieur",
    schoolNameShort: "UTC",
    schoolNameLong: "Université de Technologie de Compiègne, France",
    details: "Génie informatique"
  },
  {
    id:2,
    date: "Printemps 2021",
    title: "Stage d’ingénieur de fin d’études de 6 mois",
    schoolNameShort: "Full stack web développeuse",
    schoolNameLong: "DxOMark, Boulogne",
    details: "plus de détails +"
  },
  {
    id:3,
    date: "Printemps 2019",
    title: "Stage assistant d’ingénieur de recherche de 6 mois",
    schoolNameShort: "Le médialab",
    schoolNameLong: "Sciences-Po, Paris",
    details: "plus de détails +"
  },
  {
    id:4,
    date: "Automne 2018",
    title: "Semestre Erasmus",
    schoolNameShort: "OAMK",
    schoolNameLong: "Oulu University of Applied Sciences, Finlande",
    details: "Spécialisation en technologies du web"
  },
  {
    id:5,
    date: "Eté 2016",
    title: "Baccalauréat Scientifique",
    schoolNameShort: "LFS",
    schoolNameLong: "Lycée Français de Séoul, Corée",
    details: "Mention Très Bien, option Mathématiques, option Art Plastique"
  }
]


const FormationsDetailsListe = [

  {
    id:2,
    title: "PMUI développeuse",
    subTitle: "Développement d'outils web à usage interne ",
    details: [
    "Analyse des besoins des utilisateurs",
    "Design d'une interface (Figma)",
    "Développement de l'interface (Javascript, React, Websocket)",
    "Tests utilisateurs"
    ]
  },
  {
    id:3,
    title: "Projet Péristyle",
    subTitle: "Analyse stylistique de l’espace médiatique numérique français",
    details: [
    "Développement d’un projet de recherche en python",
    "Utilisation de méthode de traitement automatique de langage",
    "Utilisation de méthode de machine learning (PCA, scikit learn, R)",
    "Etude et analyse des résultats et visualisation de données"
    ]
  },

]
var yo = 1

function Formations() {
  const [clicked, setClicked] = useState(false);

  const [clickedId, setClickedId] = useState(0);
  const [formation, setFormation] = useState(FormationsDetailsListe.find((f)=>f.id===2));


  const listenScrollEvent = () => {
    setClicked(false)

  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
        window.removeEventListener("scroll", listenScrollEvent);
    }
}, []);


  return (
    <div className ="Background" id="formations" >

          <Slide direction="right"  mountOnEnter unmountOnExit in={clicked}>
        <div className ="DetailFormationSlide">
          <div className="FormationTitle">
            {formation.title}
        </div>    
                  <div className="FormationSubTitle">
            {formation.subTitle}
        </div>    
        {
         formation.details.map((detail) => {
            return (
                <div className="FormationDetail">
                {detail}
                </div>
              );
         } )
        }
        

        </div>    
      </Slide>
      <div className="Page" >
          <p className= {clicked?"TitleClicked": "TitleClickable"} >
          Formations & Parcours professionnel
          </p>
          <ul>
          {
             FormationsListe.map((formation) => {
 if (formation.id === 2 || formation.id === 3) {
    return (
      <li key={formation.id}>

      <div 
          className="FormationClickable" 
          onClick={()=>{
            if (formation.id !== clickedId && clicked === true) {
              setClicked(false)
              setTimeout(() => {
                setClickedId(formation.id)
                setClicked(true)
                setFormation(FormationsDetailsListe.find((f)=> (f.id===formation.id)))
              }, 200); 

            }
            else if (clicked === false){
              setClicked(true)
              setClickedId(formation.id)
            }
            else {
              setClicked(false)

            }
          }
          } >
        <p className="Date">{formation.date}</p>
        <div 
          className={(formation.id === clickedId && clicked === true)? "FormationDetailsClicked" : "FormationDetailsClickable"} >
          <p className="DetailTitle" >{formation.title}</p>
          <p className="DetailSchool"><span className="School"> {formation.schoolNameShort} </span> - {formation.schoolNameLong}</p>
          <p className="DetailDiploma" >
          {formation.details}
          </p>
        </div>
      </div>
        

</li>
    );    
  }
  else {
    return (
      <li key={formation.id}>

      <div className="Formation">
        <p className="Date">{formation.date}</p>
        <div className="FormationDetails">
          <p className="DetailTitle" >{formation.title}</p>
          <p className="DetailSchool"><span className="School"> {formation.schoolNameShort} </span> - {formation.schoolNameLong}</p>
          <p className="DetailDiploma">{formation.details}</p>
        </div>
      </div>
</li>

    );    
  }


           }
          )
          }
          
          </ul>
      </div>
    </div>
  );
}

export default Formations;
