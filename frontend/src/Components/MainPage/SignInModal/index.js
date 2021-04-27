import React, { /*useRef,*/ useEffect, useCallback,useState} from 'react';

import { Background, SignInWrapper, CloseSignInButton, Img, H1SignIn, SignInInput, IconUser, Input, IconPassword, I, BtnLogin, H2SignIn, ASignIn } from './SignInElements'

import {Redirect} from 'react-router-dom'


import axios from 'axios'

import { useForm } from "react-hook-form"; 

const SignInModal = ({ showSignIn, setShowSignIn }) => {

  //const SignInRef = useRef();



  // const closeSignIn = e => {
  //   if (SignInRef.current === e.target) {
  //    setShowSignIn(false);
  //  }
  // };


  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showSignIn) {
        setShowSignIn(false);
      }
    },
    [setShowSignIn, showSignIn]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );



  //Auth



const {register,errors,handleSubmit} = useForm()
const [role,SetRole] = useState(-1)
  const onSubmit = (data) => {

    console.log(data)
   
    axios.post("https://ricuritas.herokuapp.com/api/auth/signin",data).
    then(res => {
      setShowSignIn(false)
      SetRole(res.data.user.role)
      console.log(res,"hola, soy el token: ", res.data.Authorization)
    })
    .catch(err =>{
      console.log(err,"soy un error")
    })
  
  }

  return (
    <>
      { showSignIn ?
        (<Background>

          <SignInWrapper>

            <Img
              src="https://res.cloudinary.com/kentruri/image/upload/v1618600843/logoNegro_riuvmz.png"
              alt="Logo" />

            <H1SignIn >
              Iniciar sesion
              </H1SignIn>
            <form onSubmit={handleSubmit(onSubmit)}>
              <SignInInput>
                <I> <IconUser />  </I>
                <Input placeholder="Email" type="text"  {...register("email")} />
              </SignInInput>
              <SignInInput>
                <IconPassword />
                <Input placeholder="Contraseña" type="password"  {...register("password")} />
              </SignInInput>

              <BtnLogin >Ingresar</BtnLogin>
              </form>
              <br />
              <H2SignIn>¿No tienes cuenta? <ASignIn onClick={() => setShowSignIn(prev => !prev)} to="Register"
                smooth={true}
                duration={1000}
                spy={true}
                exact='true'
                offset={-80}


              >Registrate</ASignIn></H2SignIn>








         
          </SignInWrapper>






          <CloseSignInButton
            aria-label='Close modal'
            onClick={() => setShowSignIn(prev => !prev)}
          />
        </Background>

        ) : role == -1 ? null : role == 1 ? (<Redirect to="/Management/" />) : (<Redirect to="/categories" />)
      }
    </>
  )
}

export default SignInModal
