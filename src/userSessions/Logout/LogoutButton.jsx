
import React from 'react';

const handleLogout = () => {
    // Limpe os dados de autenticação (por exemplo, token JWT)
    localStorage.removeItem('token'); 

    window.location.href = '/login'; 
};

function LogoutButton ({ handleLogout }) {

    return (
        <button onClick={handleLogout}>Sair</button>
    );
};

export default LogoutButton;