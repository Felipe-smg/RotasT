import {useState} from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './register.css'
async function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    function handleLogin(e){
      e.preventDefault();
      if(email !== '' && password !==''){
       await signInWithEmailAndPassword(auth,email,password)
       .then(()=>{
        //navegar para /admin
        navigate('/admin',{replace:true})
       })
       .catch(()=>{
        console.log("Erro ao fazer login")
      })
       alert("TESTE")
      }else{
      alert("Preencha todos os campos!")
      }//fim do else
      }//fim da função handleLogin
      


    return (
      <div className='home-container'>
      <h1>Cadastre-se</h1>
      <span>vamos criar a sua conta.</span>
      <form className='form' onSubmit={handleLogin}>
      <input type='email' placeholder='seuemail@server.com'
      value={email} onChange={(e)=>setEmail(e.target.value)}/> <br/>
      <input type='password' placeholder='******'
      value={password}onChange={(e)=>setPassword(e.target.value)}/><br/>
      <button type="submit">Cadastrar</button>
      </form>
      
      <Link className="button-Link" to={'/register'}>
        Já possui um conta? faça o Login
     </Link>

      </div>
    )
    }//fim da função Home
   
  export default Register;
  
  