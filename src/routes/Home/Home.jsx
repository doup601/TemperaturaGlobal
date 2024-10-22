import Imagem1 from '../../../public/Imagem1.jpg';
import Imagem2 from '../../../public/Imagem2.jpg';
import Imagem3 from '../../../public/Imagem3.jpeg';
import Imagem4 from '../../../public/Imagem4.jpg';
import React from 'react';
import '../../../src/Home.css'
const Home = () => {
    return (
        <>
            <h1>Temperatura Global</h1>
            <p className='p1'>A temperatura global está mudando ao longo dos anos devido a vários problemas, dentre eles as principais são: queimadas, desmatamento, emissões de gases como o dióxido de carbono (CO2), entre outros. Assim gerando um Aquecimento Global.</p>
            <p>Este site tem o intuito de mudar isso mostrando graficos das temperaturas de diversos lugares do mundo </p>
            <div className="image-container">
                <img src={Imagem1} alt="Queimadas" className="image" />
                <img src={Imagem3} alt="CO2" className="image" />
                <img src={Imagem4} alt="Desmatamento" className="image" />
            </div>
        </>
    );
};

export default Home;
