import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Background, SignInWrapper, CloseSignInButton,Img,H1SignIn,SignInInput,IconUser,Input,IconPassword,I,BtnLogin,H2SignIn,ASignIn} from './SignInElements'
import {Button} from '../ButtonElement'
const SignInModal = ({ showSignIn, setShowSignIn }) => {

  const SignInRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showSignIn ? 1 : 0,
    transform: showSignIn ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeSignIn = e => {
    if (SignInRef.current === e.target) {
      setShowSignIn(false);
    }
  };


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


  return (
    <>
      { showSignIn ?
        (<Background>

          <SignInWrapper>

            <Img
              src="https://res.cloudinary.com/kentruri/image/upload/v1618600843/logoNegro_riuvmz.png"
              alt="Logo" />

              <H1SignIn>
                 Iniciar sesion
              </H1SignIn>

              <SignInInput>
                <I> <IconUser/>  </I> 
                <Input placeholder="Email" type="text"/>
              </SignInInput>
              <SignInInput>
                <IconPassword/>
                <Input placeholder="Contraseña" type="password"/>
              </SignInInput>

              <BtnLogin>Ingresar</BtnLogin>
<br/>
              <H2SignIn>¿Ya tienes cuenta? <ASignIn  onClick={() => setShowSignIn(prev => !prev)}  to="Register"
                            smooth={true}
                            duration={1000}
                            spy={true}
                            exact='true'
                            offset={-80}
                            
                            
                            >Ingresa</ASignIn></H2SignIn>
        


         





          </SignInWrapper>






          <CloseSignInButton
            aria-label='Close modal'
            onClick={() => setShowSignIn(prev => !prev)}
          />
        </Background>

        ) : null
      }
    </>
  )
}

export default SignInModal
