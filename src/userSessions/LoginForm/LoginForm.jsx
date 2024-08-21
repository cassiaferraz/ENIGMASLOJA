// MOSTRAR A MENSAGEM DE ALTERAR A SENHA NO OS ACESSOS
  import { useState } from 'react';
  import Swal from 'sweetalert2';
 
  import EmailInput from '../EmailInput/EmailInput';
  import PasswordInput from '../PasswordInput/passwordInput';
  import './loginForm_style.css';

 
  function LoginForm() {
      const [userEmail, setUserEmail] = useState('');
      const [userPassword, setUserPassword] = useState('');
      const [loginError, setLoginError] = useState(false);
 
      const handleSubmit = async (event) => {
       event.preventDefault();
  
       try {
           const response = await fetch('http://localhost:3000/login', {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({ userEmail: userEmail, userPassword: userPassword })
           });
  
           console.log('Status:', response.status);
           const responseData = await response.json();  //Armazene o resultado em uma variável
           console.log('Response:', responseData);
  
           if (response.ok) {
                //Verifique se o usuário já fez login antes
               const isFirstLogin = !localStorage.getItem('hasLoggedIn');
  
               if (isFirstLogin) {
                   Swal.fire({
                       title: 'Aviso',
                       text: 'Por favor, altere sua senha após o primeiro acesso.',
                       icon: 'warning',
                       confirmButtonText: 'OK',
                   }).then(() => {
                       window.location.href = '/perfil';  
                   });
               } else {
                
                   window.location.href = '/perfil';
               }
  
               // Marque que o usuário já fez login
               localStorage.setItem('hasLoggedIn', 'true');
           } else {
               setLoginError(true); // Exibir mensagem de erro caso o login falhe
           }
       } catch (error) {
           console.error('Erro ao fazer login:', error);
           alert("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
       }
   };


      return (
              <div className="login-container">
                <form className='login-form' onSubmit={handleSubmit}>
                <img src={Logo} className="vivo-icon" alt="vivo icon" />

                  <EmailInput
                      value={userEmail}
                      onChange={setUserEmail}
                  />
                  <PasswordInput
                      state={userPassword}
                      onChange={setUserPassword}
                      placeholder={"Insira sua senha"}
                      showRegexError={false}
                  />
                  <button type='submit'>Acessar</button>
                </form>
                {/* <small className='register-text'>Primeiro acesso? <a href="/register">Clique aqui</a></small> */}
                  {loginError && <p className="login-error">Email ou senha incorretos</p>}
                </div>
      );
  }
 
  export default LoginForm;


// MOSTRAR A MENSAGEM DE ALTERAR A SENHA EM TODOS OS ACESSOS
//   import { useState } from 'react';
//   import Swal from 'sweetalert2';
 
//   import EmailInput from '../EmailInput/EmailInput';
//   import PasswordInput from '../PasswordInput/passwordInput';
//   import './loginForm_style.css';
//   import Logo from '/img/svgs/logoprogressao.png'
 
//  function LoginForm() {
//    const [userEmail, setUserEmail] = useState('');
//    const [userPassword, setUserPassword] = useState('');
//    const [loginError, setLoginError] = useState(false);
 
// const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//         const response = await fetch('http://localhost:3000/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ userEmail: userEmail, userPassword: userPassword })
//         });

//         if (response.ok) {
//             Swal.fire({
//                 title: 'Aviso!',
//                 text: 'Por favor, altere sua senha após o primeiro acesso.',
//                 icon: 'warning',
//                 confirmButtonText: 'OK',
//             }).then(() => {
//                 // Redirecionamento após o login
//                 window.location.href = '/update';
//             });

//         } else {
//             setLoginError(true); // Exibir mensagem de erro caso o login falhe
//         }
//     } catch (error) {
//         console.error('Erro ao fazer login:', error);
//         alert("Ocorreu um erro ao fazer login. Por favor, tente novamente.");
//     }
// };


//    return (
//            <div className="login-container">
//              <form className='login-form' onSubmit={handleSubmit}>
//              <img src={Logo} className="vivo-icon" alt="vivo icon" />

//                <EmailInput
//                    value={userEmail}
//                    onChange={setUserEmail}
//                />
//                <PasswordInput
//                    state={userPassword}
//                    onChange={setUserPassword}
//                    placeholder={"Insira sua senha"}
//                    showRegexError={false}
//                />
//                <button type='submit'>Acessar</button>
//              </form>
//              {/* <small className='register-text'>Primeiro acesso? <a href="/register">Clique aqui</a></small> */}
//                {loginError && <p className="login-error">Email ou senha incorretos</p>}
//              </div>
//    );
// }

// export default LoginForm;