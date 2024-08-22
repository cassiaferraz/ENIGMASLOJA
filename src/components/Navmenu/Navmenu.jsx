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
            <li className='botoesdenavegacao' style={activePage == 'Home' ? { backgroundColor: 'rgb(228, 228, 228)' } : {textDecoration: ''}}
        onClick={() => handleSetActive('Home')}>
            
             <Link to= "/Home" style={{ textDecoration: 'none' }}> 
             Home </Link>
            </li>

             <li className='botoesdenavegacao' style={activePage === 'Estoque' ? { backgroundColor: 'rgb(228, 228, 228)' } : {textDecoration: ''}}
        onClick={() => handleSetActive('Estoque')}>
            
              <Link to= "/Estoque" style={{ textDecoration: 'none' }}>
              Estoque</Link>
             </li>

             <li className='botoesdenavegacao' style={activePage === 'Config' ? { backgroundColor: 'rgb(228, 228, 228)' } : {textDecoration: ''}}
        onClick={() => handleSetActive('Config')}>

              <Link to= "/Config" style={{ textDecoration: 'none' }}> 
              Configurações </Link>
             </li>
        </div>
    )
}

export default Navmenu