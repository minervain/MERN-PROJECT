import React, { useState } from 'react'
import { loginAction, registerAction } from '../redux/actions/auth'
import { useDispatch } from 'react-redux'
import './auth.css'

function Auth() {
  const [signUp,setSignUp]=useState(true)
  const [authData,setAuthData]=useState({username:'',email:'',password:''})
  
  const dispatch =useDispatch()

const onChangeFunc=(e)=>{
  setAuthData({...authData,[e.target.name]:e.target.value})
}
const authFunction=()=>{
  if(signUp){
  dispatch(registerAction(authData))
  }
  else{
    dispatch(loginAction(authData))
  }

}
console.log(authData)

  return (
    <div>
      
      <div className='a1' >
        <h1>POST PAYLAŞ</h1>
        <div className='b2'>
{      signUp &&    <input value={authData.username} name='username' onChange={onChangeFunc} type="text" placeholder='username' className='x' />
}          <input value={authData.email} name='email' onChange={onChangeFunc} type="text" placeholder='email'  className='x'/>

          <input value={authData.password} name='password' onChange={onChangeFunc} type="text" placeholder='password' className='x' />

        </div>
       { signUp ? <span className='et' onClick={()=>setSignUp(false)}>Kayıt olmak için tıklayınız</span> :
        <span className='et'  onClick={()=>setSignUp(true)}> Daha önce giriş yaptınız mı?</span>}

        <div onClick={authFunction} className='btn'>{signUp ? 'giriş yap' : 'kayıt ol'}</div>
      </div>
      
      Auth</div>
  )
}

export default Auth