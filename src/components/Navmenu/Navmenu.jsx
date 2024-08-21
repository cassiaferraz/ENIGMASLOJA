import { Link } from 'react-router-dom'
import './navmenu.css'


import React, { useState } from 'react';


function Navmenu () {

    const [activePage, setActivePage] = useState(''); 
    const handleSetActive = (page) => {
      setActivePage(page); 
    };


    return (
        <div className='Navmenu'> 
            <li className='botoesdenavegacao' style={activePage == 'Home' ? { backgroundColor: 'rgb(178, 128, 204)' } : {textDecoration: ''}}
        onClick={() => handleSetActive('Home')}>
            
             <Link to= "/Home" style={{ textDecoration: 'none' }}> 
             Home </Link>
            </li>

             <li className='botoesdenavegacao' style={activePage === 'Estoque' ? { backgroundColor: 'rgb(178, 128, 204)' } : {textDecoration: ''}}
        onClick={() => handleSetActive('Estoque')}>
            
              <Link to= "/Estoque" style={{ textDecoration: 'none' }}>
              Estoque</Link>
             </li>

             <li className='botoesdenavegacao' style={activePage === 'Configurações' ? { backgroundColor: 'rgb(178, 128, 204)' } : {textDecoration: ''}}
        onClick={() => handleSetActive('Configurações')}>

              <Link to= "/Configurações" style={{ textDecoration: 'none' }}> 
              Configurações </Link>
             </li>
        </div>
    )
}

export default Navmenu