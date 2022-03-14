import '../css/App.css';
import '../css/Contacts.css';

import React, {
  useState
} from 'react';
import Slide from '@mui/material/Slide';
import { send } from 'emailjs-com';
import downloadIcon from '../images/telechargementicon.png'
import Typed from "react-typed";

import {
  Link
} from "react-router-dom";

function Contacts() {

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'oubine',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
      send(
      'service_3du2mxd',
      'template_iotcyle',
      toSend,
      'EyXGAs_bgeADCYe0P'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className ="Background" id="contacts" >
      <div className="Page" >
      <p className="Title">

        Contacts
      </p>
          <div className="Contacts">

<div className="PetitTexte">

          <Typed
            strings={[
              'Merci d’avoir lu ce CV jusqu’au bout et n’hésitez pas à me contacter si mon profil vous a plu.',
              "Aussi, si vous voulez en savoir plus sur moi: j'ai 24 ans, je suis franco-coréenne et je suis passionée de dessin.",
              'Je vis à Paris, dans le 15ème arrondissement.',
              "Je suis un personne positive, appliquée et dynamique.",
              "A bientô, j'espère !"
              ]}
            typeSpeed={30}
            backSpeed={20}
            loop
          />
          </div>

      <Link to="../files/cv.pdf" target="_blank" download>
          <img src={downloadIcon}  className="DownloadIcon" width={200} height={170}  alt="oubine" />
          
          </Link>

<form className="Form" onSubmit={onSubmit}>
          <div className="FormTitle">
          Pour m'envoyer un petit mail :)
          </div>
  <label className="FormElement" >
    Nom
        <input type="text" name="from_name" className="InputTexte" value={toSend.from_name} onChange={handleChange}/>
  </label>
    <label className="FormElement">
    Mail
    <input type="text" name="reply_to" className="InputTexte" value={toSend.reply_to}
    onChange={handleChange}/>
  
  </label>
    <label className="FormElement">
    Sujet
        <input type="text" name="sujet" className="InputTexte" />
  </label>
      <label className="FormElement">
    Message
    <textarea name="message" className="InputTexteLong" value={toSend.message}
    onChange={handleChange}/>
  </label>

  <button value="Envoyer" className="SubmitButton">
Envoyer
</button>
</form>
      </div>


      </div>

      </div>

  );
}


export default Contacts;
