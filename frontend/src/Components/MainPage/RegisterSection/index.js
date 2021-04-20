import React from 'react'
import { RegisterContainer, RegisterWrapper, RegisterImg, RegisterForm, H2Form, Input, RegisterGridInput, RegisterInput, RegisterInputBlock, I, IconUser, IconPassword, IconCalendar, IconEmail, IconId,IconMap,IconPhone } from './RegisterSectionElements'
const RegisterSection = () => {

  

  

  
  return (
    
    <RegisterContainer id="Register">
     
      <RegisterWrapper>
        
        <RegisterForm>
          <H2Form>
            Registrate
              </H2Form>
          <RegisterGridInput>
            <RegisterInput>
              
            <div>
            <I> <IconUser/>  </I> 
              <Input placeholder="Nombre(s)" type="text" />
              </div>
            </RegisterInput>

            <RegisterInput>
              
              <div>
              <I> <IconUser/>  </I> 
                <Input placeholder="Apellido(s)" type="text" />
                </div>
              </RegisterInput>
          </RegisterGridInput>

          
          <RegisterGridInput>
            <RegisterInputBlock>
              <div>
              <I> <IconEmail/> </I>
              <Input placeholder="Email" type="text" />
              </div>
             
            </RegisterInputBlock>


          </RegisterGridInput>

          <RegisterGridInput>
            <RegisterInput>
            <I> <IconPassword/></I>
                <Input placeholder="Contraseña" type="password"/>
            </RegisterInput>

            <RegisterInput>
            <I> <IconPassword/></I>
                <Input placeholder="Repita su contraseña" type="password"/>
            </RegisterInput>
          </RegisterGridInput>

          <RegisterGridInput>
            <RegisterInputBlock>
              <div>
              <I> <IconMap/> </I>
              <Input placeholder="Direccion de residencia" type="text" />
              </div>
             
            </RegisterInputBlock>


          </RegisterGridInput>

          
          <RegisterGridInput>
            <RegisterInput>
            <I> <IconId/></I>
        
                <Input placeholder="Tipo de documento" type="tel"/>
            </RegisterInput>

            <RegisterInput>
            <I> <IconId/></I>
                <Input placeholder="Numero de ID" type="text"/>
            </RegisterInput>
          </RegisterGridInput>


 
    
        <RegisterGridInput>
           

            <RegisterInput>
            <I> <IconPhone/></I>
                <Input placeholder="Num. celular" type="tel"/>
            </RegisterInput>

            <RegisterInput>
              <div>
              <I> <IconCalendar/> </I>
              <Input type="date" placeholder="Año de nacimiento"  />
              </div>
             
            </RegisterInput>


          </RegisterGridInput>
          </RegisterForm>

      </RegisterWrapper>
    </RegisterContainer>
  )
}

export default RegisterSection
