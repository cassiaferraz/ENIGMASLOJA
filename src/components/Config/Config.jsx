// import BoxPerfil from "../BoxPerfil/BoxPerfil"
import { Link } from "react-router-dom"
import Navmenu from "../Navmenu/Navmenu"

import Lua from '/img/svgs/Lua.svg'
import sair from '/img/svgs/VoltarSair.svg'

import '../Config/config.css'

export default function Config () {

    // const token = sessionStorage.getItem("token")
    // console.log(token)
    // if(!token) {
    //     window.location.href = "/";
    // }

    return(
     <div className="todocontainer">
        <Navmenu />
            <div className="pag-config">
                <div id="sair-app">

                    <h2 className="titulodapagina">Configurações</h2>
                </div>


               <div id="itens-config">
                    <Link style={{ textDecoration: 'none' }} to="/Update">
                        <button>Alterar Senha</button>
                    </Link>

                    <Link to="" style={{ textDecoration: 'none' }}>
                        <button>Notificações</button>
                    </Link>

                    <Link to="" style={{ textDecoration: 'none' }}>
                        <button>Tema <img id="lua" src={Lua}/></button>
                    </Link>

                    <Link to="" style={{ textDecoration: 'none' }}>
                        <button>Privacidade</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
