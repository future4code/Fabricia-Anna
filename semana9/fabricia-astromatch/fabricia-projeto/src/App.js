import React, { useState } from 'react';
import Cabecalho from './components/cabecalho/cabecalho';
import HomeMatch from './components/Home/HomeMatch';
import ListaMatch from './components/listaMatch/ListaMatch';

const AppLista = () => {
  const [irLista, setIrLista] = useState("home")


  const EscolherTela = () => {
    switch (irLista) {
      case "home":
        return <HomeMatch />;
      case "lista":
        return <ListaMatch />
      default:
        return <HomeMatch />
    }
  };

  const MudaTelaList = () => {
    setIrLista("home")
  };

  const MudaTelaHome = () => {
    setIrLista("lista")
  };



  return (
    <div>
     <Cabecalho MudaTelaHome={MudaTelaHome} />
     {EscolherTela()}
    </div>
  );

}
export default AppLista


