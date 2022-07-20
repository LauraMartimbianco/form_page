import { useState } from 'react'
import Lottie from "lottie-react";

import './App.css'
import Input from './components/input'
import RadioBox from './components/radioBox'
import TextArea from './components/textArea'
import megaphone from "./assets/animations/megaphone.json";


export default function App () {
  const [login, setLogin] = useState('')

  return(
    <div class="container">
      <h1><strong>Formulário do candidato</strong></h1>
      <form class="form">
        <Input placeholder='Nome' type='text' size='100%'/>
        <Input placeholder='Data de nascimento'type='date' size='50%'/>
        <Input placeholder='Contato' type='text' size='50%'/>
        <Input placeholder='Endereço' type='text' size='100%'/>
        <Input placeholder='E-mail' type='text' size='100%'/>
        <RadioBox />
        <TextArea placeholder='Descreva suas experiências anteriores' type='text' size='100%'rows={15}/>
       
        <Input type='file' size='100%' label={'Clique aqui para fazer upload do seu currículo'} forId='file'/>

        <div style={{position: 'absolute', left: 20, zIndex: 0, opacity:0.65}}>
          <Lottie animationData={megaphone} loop={true} />
        </div>

        <div style={{position: 'absolute', right: 20, zIndex: 0, opacity:0.65, transform: 'scale(-1, 1)'}}>
          <Lottie animationData={megaphone} loop={true} />
        </div>


        <button type="submit" class="button_default" onClick={() => alert(login)}>Enviar</button>
      </form>
    </div>
 
  
  )
}