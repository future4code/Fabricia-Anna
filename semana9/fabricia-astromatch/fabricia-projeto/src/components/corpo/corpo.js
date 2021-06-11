import React, { useState, useEffect } from 'react';
import BotaoDecide from './BotaoDecide';
import Cartela from './cartela';
import axios from 'axios'


function PerfilHome() {
    const [CorpoPerfil, setCorpoPerfil] = useState({})

    const pegarPerfil = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabricia/person')
            .then((res) => {
                setCorpoPerfil(res.data.profile)
            })
    }

    const aceitareNaoPerfil = (choice) => {
        const corpo = {
            choice: choice,
            id: CorpoPerfil.id
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabricia/choose-person', corpo)
            .then((res) => {
                pegarPerfil()
            })
    }


    useEffect(() => {
        pegarPerfil()
    }, []);

    const BotaoNao = () => {
        aceitareNaoPerfil(false)
    }

    const BotaoSim = () => {
        aceitareNaoPerfil(true)
    }

    return (
        <div>
            <Cartela perfil={CorpoPerfil} />
            <BotaoDecide BotaoNao={BotaoNao} BotaoSim={BotaoSim} />
        </div>

    );
}

export default PerfilHome;