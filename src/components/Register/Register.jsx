import React, { useState } from 'react';

import "./register_style.css"

import Logo from '../../../../public/img/svgs/logoprogressao.png'
import BackArrow from "/img/svgs/voltar.svg"

import RegisterForm from '../../userSessions/RegisterForm/RegisterForm';

function Register() {

    return (

        <div className='body-container'>

            <div className="register-container">
              
                <a href="/perfil">
                    <img 
                        className="btn-backPage"
                        src={BackArrow} 
                        alt="Voltar"
                        />
                </a>
                <div className='subtitulo-cadastro'>

                </div>
                <RegisterForm/>

            </div>
        </div>
    );
}

export default Register;
