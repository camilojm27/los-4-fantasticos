import React, { useState } from 'react'
import { RegisterContainer, 
  RegisterWrapper, 
  RegisterForm, 
  H2Form, 
  Input, 
  RegisterGridInput, 
  RegisterInput, 
  RegisterInputBlock, 
  I, 
  IconUser, 
  IconPassword, 
  IconCalendar, 
  IconEmail, 
  IconId, 
  IconMap, 
  IconPhone,

  InputBlock} from './RegisterSectionElements'
import { useForm } from "react-hook-form";
import {Redirect} from 'react-router-dom'
import {BtnRegister} from './RegisterSectionElements'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete"
import axios from 'axios'



const RegisterSection = () => {


  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data) => {
    data.latitude = coordinates.lat;
    data.longitude = coordinates.lng;
    data.name = data.name + " " + data.last_Name

    data.role = 0
    delete data.last_Name
    data.address = address
    data.doc_num = parseInt(data.doc_num,10)
    data.phone_num = parseInt(data.phone_num,10)


    console.log(data)

    axios.post("https://ricuritas.herokuapp.com/api/auth/signup",data).
    then(res => {
      
      console.log(res,"Funcionó");

     
    })
    .catch(err =>{
      console.log(err,"soy un error");
    })



  };



  //Autocompletado  <p>Prueba: latitud: {coordinates.lat} y longitud: {coordinates.lng} </p>

  const [address, setAddress] = useState("")
  const [coordinates,setCoordinates] = useState({lat:null,lng:null})

  const handleSelect = async value => {
     const  results = await geocodeByAddress(value);
     const latLng = await getLatLng(results[0]);
     setAddress(value);
     setCoordinates(latLng)
  }




  return (
    <>
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
                  <I> <IconUser />  </I>
                  <Input placeholder="Nombre(s)" type="text" name="nombre" {...register("name")} />
                </div>
              </RegisterInput>

              <RegisterInput>

                <div>
                  <I> <IconUser />  </I>
                  <Input placeholder="Apellido(s)" type="text" name="apellido" {...register("last_Name")} />
                </div>
              </RegisterInput>
            </RegisterGridInput>


            <RegisterGridInput>
              <RegisterInputBlock>
                <div>
                  <I> <IconEmail /> </I>
                  <InputBlock placeholder="Email" type="text" name="email" {...register("email")} />
                </div>

              </RegisterInputBlock>


            </RegisterGridInput>

            <RegisterGridInput>
              <RegisterInput>
                <I> <IconPassword /></I>
                <Input placeholder="Contraseña" type="password" name="password" {...register("password")} />
              </RegisterInput>

              <RegisterInput>
                <I> <IconPassword /></I>
                <Input placeholder="Repita su contraseña" type="password" name="rpassword"  />
              </RegisterInput>
            </RegisterGridInput>

            <RegisterGridInput>
            <RegisterInputBlock>

              <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>

                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (

    
                    <div>
    
                     <I> <IconMap /> </I>
                      <InputBlock {...getInputProps({placeholder : "Direccion de residencia"})}type="text" name="direccion" />
                      <div>
                        {loading && <div>...loading</div>}
                        {suggestions.map((suggestions) => {
                          const style = suggestions.active 
                          ? {backgroundColor: "#ddd", cursor: "pointer"}
                          : {backgroundColor: "#fff", cursor: "pointer"};
                          return <div {...getSuggestionItemProps(suggestions, {style}) }>{suggestions.description}</div>
                        })}
                        </div>
                    </div>

 


                )}


              </PlacesAutocomplete>

              </RegisterInputBlock>



            </RegisterGridInput>


            <RegisterGridInput>
              <RegisterInput>
                <I> <IconId /></I>

                <Input placeholder="Tipo de documento" type="tel" name="doc_type" {...register("doc_type")} />
              </RegisterInput>

              <RegisterInput>
                <I> <IconId /></I>
                <Input placeholder="Numero de ID" type="text" name="doc_num" {...register("doc_num")} />
              </RegisterInput>
            </RegisterGridInput>




            <RegisterGridInput>


              <RegisterInput>
                <I> <IconPhone /></I>
                
                <Input placeholder="Num. celular" type="tel" name="phone_num" {...register("phone_num")} />
              </RegisterInput>

              <RegisterInput>
                <div>
                  <I> <IconCalendar /> </I>
                  <Input type="date" placeholder="Año de nacimiento" name="fecha" {...register("birth")}/>
                </div>

              </RegisterInput>




            </RegisterGridInput>


           
            <BtnRegister >Registrarse</BtnRegister>
          </RegisterForm>

      
        </form>

      </RegisterWrapper>



  

  
    </RegisterContainer>

                      </>
  )
  
}

export default RegisterSection
