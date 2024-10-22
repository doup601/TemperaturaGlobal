import { useState } from 'react';
import SensorChart from '../../components/Sensor/Sensor'; // Reaproveitando o componente de gráfico
import '../../../src/adicionargrafico.css'

const AdicionarGrafico = () => {
  const [cidade, setCidade] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gerar dados aleatórios para o gráfico
    const newData = Array.from({ length: 10 }, () => ({
      time: `${Math.floor(Math.random() * 24)}h`,
      value: Math.floor(Math.random() * 100),
    }));

    setData(newData);
  };

  return (
    <div>
      <h1>Adicionar Gráfico</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da cidade ou país"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <button type="submit">Gerar Gráfico</button>
      </form>
      {data.length > 0 && (
        <div>
          <h2 className='agh2'>Gráfico de {cidade}</h2>
          <SensorChart data={data} />
        </div>
      )}
    </div>
  );
};

export default AdicionarGrafico;
