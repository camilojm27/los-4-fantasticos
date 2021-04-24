import React from 'react'
import { RegisterContainer, RegisterWrapper, RegisterForm, H2Form, Input, RegisterGridInput, RegisterInput, RegisterInputBlock, I, IconUser, IconPassword, IconCalendar, IconEmail, IconId,IconMap,IconPhone } from './RegisterSectionElements'
import { useForm } from "react-hook-form"; 
import { Redirect } from 'react-router-dom'

import axios from 'axios'



const RegisterSection = () => {

  const {register,errors,handleSubmit} = useForm()

  const onSubmit = (data) => {
    console.log(data,"hola")
  
  }

  

  
  return (
    
    <RegisterContainer id="Register">
     
      <RegisterWrapper>
         
         <form onSubmit={handleSubmit(onSubmit)}>
        <RegisterForm >
          <H2Form>
            Registrate
              </H2Form>
          <RegisterGridInput>
            <RegisterInput>
              
            <div>
            <I> <IconUser/>  </I> 
              <Input placeholder="Nombre(s)" type="text" name="nombre" />
              </div>
            </RegisterInput>

            <RegisterInput>
              
              <div>
              <I> <IconUser/>  </I> 
                <Input placeholder="Apellido(s)" type="text" name="apellido" />
                </div>
              </RegisterInput>
          </RegisterGridInput>

          
          <RegisterGridInput>
            <RegisterInputBlock>
              <div>
              <I> <IconEmail/> </I>
              <Input placeholder="Email" type="text" name="email" />
              </div>
             
            </RegisterInputBlock>


          </RegisterGridInput>

          <RegisterGridInput>
            <RegisterInput>
            <I> <IconPassword/></I>
                <Input placeholder="Contraseña" type="password" name="password"/>
            </RegisterInput>

            <RegisterInput>
            <I> <IconPassword/></I>
                <Input placeholder="Repita su contraseña" type="password" name="rpassword"/>
            </RegisterInput>
          </RegisterGridInput>

          <RegisterGridInput>
            <RegisterInputBlock>
              <div>
              <I> <IconMap/> </I>
              <Input placeholder="Direccion de residencia" type="text" name="direccion" />
              </div>
             
            </RegisterInputBlock>


          </RegisterGridInput>

          
          <RegisterGridInput>
            <RegisterInput>
            <I> <IconId/></I>
        
                <Input placeholder="Tipo de documento" type="tel" name="tipoDocumento"/>
            </RegisterInput>

            <RegisterInput>
            <I> <IconId/></I>
                <Input placeholder="Numero de ID" type="text" name="documento"/>
            </RegisterInput>
          </RegisterGridInput>


 
    
        <RegisterGridInput>
           

            <RegisterInput>
            <I> <IconPhone/></I>
                <Input placeholder="Num. celular" type="tel" name="numero"/>
            </RegisterInput>

            <RegisterInput>
              <div>
              <I> <IconCalendar/> </I>
              <Input type="date" placeholder="Año de nacimiento" name="fecha"  />
              </div>
             
            </RegisterInput>


          </RegisterGridInput>
          <button>enviar</button>
          </RegisterForm>
          </form>

      </RegisterWrapper>
    </RegisterContainer>
  )
}

export default RegisterSection
