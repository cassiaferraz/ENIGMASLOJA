// import usuario from '../../../../public/img/svgs/usuariofoto.png'
// import BarraProgresso from '../Progresso/BarraProgresso'
// import coin from '../../../../public/img/svgs/Dolar_Dinero_Moneda_1Light.svg'
// import notificacao from '../../../../public/img/svgs/notificacao.svg'

// import { Link } from 'react-router-dom'

//  import { useState, useEffect} from 'react'

// import '../BoxPerfil/boxperfil.css'
// // import { application } from 'express'

// function BoxPerfil () {
   
//    const [nivel, setNivel] = useState('')
//    const [xp, setXp] = useState('')
//    const [moedas, setMoedas] = useState('')
//    const [notificationCount, setNotificationCount] = useState(0);

//    const handleNotificationClick = () => {
       
//        setNotificationCount(notificationCount + 1);
//    };
//   useEffect(() => {

//     async function pegarDadosBoxPerfil(){
//       try {
//         const response = await fetch ('http://localhost:3000/perfil', {method: 'GET'
//       // headers:{
//       //   'Content-Type': 'application/json',
//       //     }
//         })

//         const data = await response.json()
//         // setTecnico(data[0].tecnico.ID_TECNICO);
//         setNivel(data[0].NIVEL);
//         setXp(data[0].XP);
//         setMoedas(data[0].MOEDAS);

//         console.log(data)
//         console.log(data[0])
//      } catch (error){
//        console.log('Erro ao buscar dados',error)
//        }

     
//     }
//     pegarDadosBoxPerfil();

//   }, [])

//     return(
//       <div>
//          <Link to= "/Perfil" style={{ textDecoration: 'none' }}>
//           <header className="header-perfil">
          
//               <img  className="icon-usuario" src={usuario} alt="usuario" />
//               <div className="info">
//                 <div className='notificacao'>
//                   <img src={notificacao} alt="Ícone de Notificação" 
//                   onClick={handleNotificationClick} />
//                   {notificationCount > 0 && <span className="badge">{notificationCount}</span>}
//                </div>
//                     <h2 className="subinfo">Roberta da Silva</h2>
//                     <h4 className="subinfo">Nível {nivel}</h4>
//                     <div className='subinfo-progresso'>
//                         <h4 className="subinfo">EXP </h4> <BarraProgresso xp= {xp}/>
//                     </div>
//                     <div className="coin-valor">
//                         <img className='coin' src={coin} />
//                         {moedas}
//                     </div>
//               </div>
//           </header></Link>
//         </div>
//     )
// };

// export default BoxPerfil







import usuario from '../../../../public/img/svgs/usuariofoto.png'
import BarraProgresso from '../Progresso/BarraProgresso'
import coin from '../../../../public/img/svgs/Dolar_Dinero_Moneda_1Light.svg'
import notificacao from '../../../../public/img/svgs/notificacao.svg'

import { Link } from 'react-router-dom'

 import { useState, useEffect} from 'react'

import '../BoxPerfil/boxperfil.css'
// import { application } from 'express'

function BoxPerfil () {
   
   const [nivel, setNivel] = useState('')
   const [xp, setXp] = useState('')
   const [moedas, setMoedas] = useState('')
   const [notificationCount, setNotificationCount] = useState(0);

   const handleNotificationClick = () => {
       
       setNotificationCount(notificationCount + 1);
   };
  useEffect(() => {

    async function pegarDadosBoxPerfil(){
      try {
        const response = await fetch ('http://localhost:3000/perfil', {method: 'GET'
      // headers:{
      //   'Content-Type': 'application/json',
      //     }
        })

        const data = await response.json()
        // setTecnico(data[0].tecnico.ID_TECNICO);
        setNivel(data[0].NIVEL);
        setXp(data[0].XP);
        setMoedas(data[0].MOEDAS);

        console.log(data)
        console.log(data[0])
     } catch (error){
       console.log('Erro ao buscar dados',error)
       }

     
    }
    pegarDadosBoxPerfil();

  }, [])

    return(
      <div>
<Link to="/Perfil" style={{ textDecoration: 'none' }}>
            <header className="header-perfil">
            <img  className="icon-usuario" src={usuario} alt="usuario" />
              <div className="info">
                {/* <div className='notificacao'>
                  <img src={notificacao} alt="Ícone de Notificação" onClick={handleNotificationClick} />
                  {notificationCount > 0 && <span className="badge">{notificationCount}</span>}
                </div> */}
                <div className="nome-e-nivel">
                  <h2 className="subinfo">Roberta da Silva</h2>
                  <h4 className="subinfo">Nível {nivel}</h4>
                </div>
                <div className='subinfo-progresso'>
                  <h4 className="subinfo">EXP </h4> <BarraProgresso xp={xp} />
                </div>
                <div className="coin-valor">
                  <img className='coin' src={coin} alt="Ícone de Moedas" />
                  {moedas}
                </div>
              </div>
            </header>
</Link>
        </div>
    )
};

export default BoxPerfil