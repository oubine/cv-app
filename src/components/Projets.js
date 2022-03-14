import '../css/App.css';
import '../css/Projets.css';

import React, {
  useState,
  useEffect
} from 'react';
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel'
import leftArrow from '../images/leftArrow.png'
import leftArrowBold from '../images/leftArrowBold.png'
import rightArrow from '../images/rightArrow.png'
import rightArrowBold from '../images/rightArrowBold.png'
import cadre from '../images/cadreLarge.png'
import imageCet from '../images/Cet.png'
import imageIF from '../images/IF.png'
import imageHub from '../images/hub.png'
import imageSouvenirs from '../images/souvenirs.png'
import Slide from '@mui/material/Slide';

import '@brainhubeu/react-carousel/lib/style.css';

const ProjetsListe = [
  {
    id:0,
    date: "2020",
    title: "Projet de Eye Tracking",
    detailsShort: "Développement d'une environnement virtuel",
    detailsLong: "pour mesurer la charge cognitive, le stress, la fatigue visuelle. Développement de 3 tests d’oculométrie, d’un hub de repos et de 4 variations des tests. Equipe de 4 étudiants",
    skills: "Travail bibliographique, Unity, C#, SDK tobii, tests utilisateurs"
  },
  {
    id:1,
    date: "2020",
    title: "Directrice Artistique de la 8ème édition de l'Imaginarium Festival",
    detailsShort: "Festival étudiant",
    detailsLong: "ayant acceuilli 13 000 festivaliers en 2019, 80 étudiants organisateurs. Supervision des équipes chargées du graphisme, de la décoration, de la programmation et de la communication (40 personnes)",
    skills: "Management, Communication, Organisation"
  },
  {
    id:2,
    date: "2019-2020",
    title: "Projets de réalité virtuelle",
    detailsShort: "La planète aux souvenirs",
    detailsLong: ", développement environnement 3D immersif et artistique.",
    skills: "Unity, C#, HTC Vive, travail d’équipe"
  },
  {
    id:3,
    date: "2018",
    title: "Création de l'association Compiègne en Transition",
    detailsShort: "Association qui vise à recréer des circuits courts et des échanges au sein de la ville.",
    detailsLong: "",
    skills: ""
  },
]


function ProjectDescription(props) {
  
  useEffect(() => {

  });



  return (      
    <div>
        <div className="ProjetDescription">
          <span className="ProjetDate"> {props.detailsShort} </span> {props.detailsLong}
        </div>
        <div className="ProjetSkills">
          {props.skills}
        </div> 
      </div> );
}




class Projets extends React.Component {


  constructor() {

    super()
    this.state = {
      value: 0,
      projet: {
        id:0,
        date: "2020",
        title: "Projet de Eye Tracking",
        detailsShort: "Développement d'une environnement virtuel",
        detailsLong: "pour mesurer la charge cognitive, le stress, la fatigue visuelle. Développement de 3 tests d’oculométrie, d’un hub de repos et de 4 variations des tests. Equipe de 4 étudiants",
        skills: "Travail bibliographique, Unity, C#, SDK tobii, tests utilisateurs"
      },
    }
    this.onChange = this.onChange.bind(this);
  }


  onChange(value) {
    const newValue = value<0? (value*(-1))%4:value%4
    if (newValue !== this.state.value) {
    if (newValue === 0 || newValue === 1 || newValue === 2 || newValue === 3) {
        const newProjet = ProjetsListe.find(projet => projet.id === newValue)
        this.setState({ 
          value:newValue,
          projet: newProjet
        }); 
    } 
    }

  }


  render() {
    return (
      <div className ="Background" id="projets" >
        <div className="Page" >
          <p className="Title">

            Projets
          </p>
          <div className="Projets">
            <div className="ProjetTitle">
              {this.state.projet.title} - <span className="ProjetDate">{this.state.projet.date}</span>
            </div>
              <div className="Decoration">
                <img src={cadre} className="DoubleCadre" width={950} height={325}  alt="oubine" />


                <div className="Carousel">
              <Carousel
                value={this.state.value}
                onChange={this.onChange}
                slides={[
                  (<img src={imageHub} width={500} />),
                  (<img src={imageIF}  width={500}    />),

                  (<img src={imageSouvenirs} width={500}/>),
                  (<img src={imageCet} />),


                ]}
                plugins={[
                  'infinite',
                  'clickToChange',
                  {
                    resolve: arrowsPlugin,
                    options: {
                      arrowLeft: <img src={leftArrowBold}/>,
                      arrowLeftDisabled:<img src={leftArrow}/>,
                      arrowRight: <img src={rightArrowBold}/>,
                      arrowRightDisabled: <img src={rightArrow}/>,
                      addArrowClickHandler: true,
                    }
                  }
                ]} />

                </div>
                   
              </div> 

<ProjectDescription

detailsShort = {this.state.projet.detailsShort}
detailsLong = {this.state.projet.detailsLong}
skills = {this.state.projet.skills}

/>
      </div>      
      </div>

      </div>
    );
  }
}




export default Projets;
