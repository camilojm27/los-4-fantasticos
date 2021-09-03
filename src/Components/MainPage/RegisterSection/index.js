import React, { useState, useRef } from 'react'
import {
  RegisterContainer,
  RegisterWrapper,
  RegisterForm,
  H2Form,
  Input,
  RegisterGridInput,
  RegisterInput,
  RegisterInputBlock,
  ComboBox,
  I,
  IconUser,
  IconPassword,
  IconCalendar,
  IconEmail,
  IconId,
  IconMap,
  IconPhone,
  ErrorMesage,
  InputBlock
} from './RegisterSectionElements'
import { useForm } from "react-hook-form";

import { BtnRegister } from './RegisterSectionElements'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete"
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from "../../../state/actions/authAction"
import { useHistory } from 'react-router-dom';
import { REGISTER_FAIL } from "../../../state/constants/authConstants"


const RegisterSection = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const { messageRegister } = useSelector(state => state.auth);
  const { register, formState: { errors }, handleSubmit, watch } = useForm()
  const password = useRef({});
  const doc_type = useRef({});
  password.current = watch("password", "");
  doc_type.current = watch("doc_type", "")

  const onSubmit = (data) => {

    data.latitude = coordinates.lat;
    data.longitude = coordinates.lng;
    data.name = data.name + " " + data.last_Name
    data.role = 0
    delete data.last_Name
    data.address = address
    data.doc_num = parseInt(data.doc_num, 10)
    data.phone_num = parseInt(data.phone_num, 10)
    delete data.password_repeat
    if (data.birth == "Invalid Date") {
      dispatch({
        type: REGISTER_FAIL,
        payload: { messageRegister: "Ingrese la fecha" }
      })

    }
    else {
      dispatch(signUp(data)).then(() => { history.push("/") })
    };



  };



  //Autocompletado  <p>Prueba: latitud: {coordinates.lat} y longitud: {coordinates.lng} </p>

  const [address, setAddress] = useState("")
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null })

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
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
                    <Input placeholder="Nombre(s)" type="text" name="nombre" {...register("name", { required: "Campo obligatorio" })} />
                    {errors.name && <ErrorMesage> {errors.name.message} </ErrorMesage>}
                  </div>

                </RegisterInput>

                <RegisterInput>

                  <div>
                    <I> <IconUser />  </I>
                    <Input placeholder="Apellido(s)" type="text" name="apellido" {...register("last_Name", { required: "Campo obligatorio" })} />
                  </div>
                  {errors.last_Name && <ErrorMesage> {errors.last_Name.message} </ErrorMesage>}
                </RegisterInput>
              </RegisterGridInput>


              <RegisterGridInput>
                <RegisterInputBlock>
                  <div>
                    <I> <IconEmail /> </I>
                    <InputBlock placeholder="Email" type="email" name="email" {...register("email", { required: "Campo obligatorio" })} />

                  </div>
                  {errors.email && <ErrorMesage> {errors.email.message} </ErrorMesage>}

                </RegisterInputBlock>


              </RegisterGridInput>

              <RegisterGridInput>
                <RegisterInput>

                  <I> <IconPassword /></I>
                  <Input placeholder="Contraseña" type="password" name="password" {...register("password", { required: "Campo obligatorio" })} />
                  {errors.password && <ErrorMesage> {errors.password.message} </ErrorMesage>}
                </RegisterInput>

                <RegisterInput>
                  <I> <IconPassword /></I>
                  <Input placeholder="Repita su contraseña" type="password" name="password_repeat" {...register("password_repeat", {
                    validate: value => value === password.current || "Las contraseñas no coinciden"
                  })} />

                </RegisterInput>
                {errors.password_repeat && <ErrorMesage> {errors.password_repeat.message} </ErrorMesage>}
              </RegisterGridInput>

              <RegisterGridInput>
                <RegisterInputBlock>

                  <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>

                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (


                      <div>

                        <I> <IconMap /> </I>
                        <InputBlock {...getInputProps({ placeholder: "Direccion de residencia" })} type="text" name="direccion" />
                        <div>
                          {loading && <div>...loading</div>}
                          {suggestions.map((suggestions, index) => {
                            const style = suggestions.active
                              ? { backgroundColor: "#ddd", cursor: "pointer" }
                              : { backgroundColor: "#fff", cursor: "pointer" };
                            return <div {...getSuggestionItemProps(suggestions, { style })} key={index}>{suggestions.description}</div>
                          })}
                        </div>
                      </div>




                    )}


                  </PlacesAutocomplete>

                </RegisterInputBlock>



              </RegisterGridInput>


              <RegisterGridInput>
                <RegisterInput>

                  <ComboBox name="format" id="format"  {...register("doc_type", { required: "Campo obligatorio" })}>
                    <option select value="Cedula">Cedula</option>
                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                    <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                    <option value="DNI">DNI</option>
                  </ComboBox>


                </RegisterInput>

                <RegisterInput>
                  <I> <IconId /></I>
                  <Input placeholder="Numero de ID" type="text" name="doc_num" {...register("doc_num", { required: "Campo obligatorio", valueAsNumber: { value: true, message: "Debe de ser un numero" } })} />
                  {errors.doc_num && <ErrorMesage> {errors.doc_num.message} </ErrorMesage>}
                </RegisterInput>
              </RegisterGridInput>




              <RegisterGridInput>


                <RegisterInput>
                  <I> <IconPhone /></I>

                  <Input placeholder="Num. celular" type="tel" name="phone_num" {...register("phone_num", { required: "Campo obligatorio", valueAsNumber: { value: true, message: "Debe de ser un numero" } })} />

                  {errors.phone_num && <ErrorMesage> {errors.phone_num.message} </ErrorMesage>}
                </RegisterInput>

                <RegisterInput>
                  <div>
                    <I> <IconCalendar /> </I>
                    <Input type="date" placeholder="Año de nacimiento" name="fecha" {...register("birth", { required: "Campo obligatorio", valueAsDate: { value: true, message: "Debe de ser una fecha" } })} />
                    {errors.birth && <ErrorMesage> {errors.birth_.message} </ErrorMesage>}

                  </div>

                </RegisterInput>




              </RegisterGridInput>


              <ErrorMesage>{messageRegister}</ErrorMesage>
              <BtnRegister >Registrarse</BtnRegister>


            </RegisterForm>


          </form>

        </RegisterWrapper>






      </RegisterContainer>

    </>
  )

}

export default RegisterSection
