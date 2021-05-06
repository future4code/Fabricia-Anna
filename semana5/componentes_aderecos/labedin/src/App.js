import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import PerfilImg from './img/Fabi.jpg';
import Profissao from './img/ibrowse.png';
import EmailContato from './img/email.png';
import Local from './img/local.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={PerfilImg} 
          nome="Fabricia Sant Anna" 
          descricao="Oi, eu sou Fabricia Sant Anna. Sou estudante Web FullStack da Labenu e Supervisora de Service Desk composto por um time de 7 pessoas. Adoro novos desafios e minha meta é a transição profissional para a área de desenvolvimento."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
        imagem ={EmailContato}
        nome="Email:"
        descricao="briciasilv@gmail.com"
        />
      </div> 

      <div className="page-section-container">
        <CardPequeno
        imagem ={Local}
        nome="Endereço:"
        descricao="Praia da Guanabara - Ilha do Governador"
        />
      </div> 

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Profissao}
          nome="Ibrowse - CETEM" 
          descricao="Supervisora de Service Desk durante 3 anos." 
        />
        
        <CardGrande 
          imagem={Profissao} 
          nome="Ibrowse-INPI" 
          descricao="Suporte de TI de Nível 2 para usuários durante 2 anos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />            
      </div>    
       
    </div>
  );
}

export default App;
