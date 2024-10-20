import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sair = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Saindo...');
    
    navigate('/login'); 
  };

  return (
    <button onClick={handleLogout}>
      Sair
    </button>
  );
};

export default Sair;
