import Tablas from './Tablas'
import React, { useEffect, useState } from 'react';
import { Container, WrapperTable } from '../Elements'
import { useDispatch, useSelector } from "react-redux";
import {
    Background,
    CloseModal,
    H1,
    Input,
    ModalInput,
    Options,
    OptionsRemove,
    Title
} from '../Clients/modalElements'
import { BtnEdit, BtnRemove, BtnSend } from '../Btn'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { addUser, deleteUser, editUser, getUsers } from '../../../state/actions/userActions'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete"
import { ComboBox } from '../../MainPage/RegisterSection/RegisterSectionElements';

const Modal = styled.div`
  max-width: 900px;
  min-width: 750px;
  max-height: 900px;
  min-height: 750px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

  position: absolute;
  z-index: 10;
  border-radius: 5px;
  -webkit-box-shadow: inset 0px -5px 15px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px -5px 15px -4px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px -5px 15px -4px rgba(0, 0, 0, 0.75);

`;

const Client = () => {
    const dispatch = useDispatch()
    const [loc, setLoc] = useState("")
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null })
    const { user: currentUser } = useSelector((state) => state.auth);
    const listUsers = useSelector(state => state.userList)
    const [modal, setModal] = useState({
        remove: false,
        edit: false,
        insert: false
    })

    const [edit, setEdit] = useState({ name: "", email: "", doc_type: "", doc_num: "", birth: "", address: "", password: "", phone_num: "" })
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: edit

    })



    useEffect(() => {
        setValue("name", edit.name)
        setValue("email", edit.email)
        setValue("doc_type", edit.doc_type)
        setValue("doc_num", edit.doc_num)
        setValue("birth", edit.birth)
        setValue("longitude", edit.location?.longitude)
        setValue("latitude", edit.location?.latitude)
        setValue("address", edit.location?.address)
        setValue("password", edit.password)
        setValue("phone_num", edit.phone_num)
        setValue("role", edit.role)
    }, [edit])




    const handleSelect = (select, data) => {
        console.log(data, "ya me pase")
        setModal(select)
        setEdit(data)

    }

    const handleAddress = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setLoc(value);
        setCoordinates(latLng)
    }


    const onSubmit = async (data) => {


        if (modal.insert === true) {
            data.latitude = coordinates.lat;
            data.longitude = coordinates.lng;
            data.address = loc
            data.role = 0
            dispatch(addUser(data, currentUser.Authorization)).then(response => {
                setModal({ remove: false, edit: false, insert: false })
                dispatch(getUsers(currentUser.Authorization))

            }).catch(error => {
                console.log(error.response)
            })
        } else {
            if (modal.edit === true) {
                if (loc === "") {
                    const results = await geocodeByAddress(data.address);
                    const latLng = await getLatLng(results[0]);
                    data.latitude = latLng.lat
                    data.longitude = latLng.lng
                    
                 
                } else {
                    data.latitude = coordinates.lat
                    data.longitude = coordinates.lng
                    data.address = loc
                  
                }
                console.log(data)
                dispatch(editUser(data, currentUser.Authorization)).then(response => {
                    setModal({ remove: false, edit: false, insert: false })
                    dispatch(getUsers(currentUser.Authorization))
                }).catch(error => {
                    console.log(error.response)
                })
            }

        }
    }

    const confirm = async () => {
        if (modal.remove === true) {

            dispatch(deleteUser(edit.doc_num, currentUser.Authorization))
                .then(response => {
                    setModal({ remove: false, edit: false, insert: false })
                    dispatch(getUsers(currentUser.Authorization))
                }).catch(error => {
                    console.log(error.response.data)
                })
        }
    }

    useEffect(() => {
        dispatch(getUsers(currentUser.Authorization))
    }, [dispatch])


    return (

        <Container>
            {modal.insert ?
                <Background>
                    <Modal>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CloseModal
                                aria-label='Close modal'
                                onClick={() => setModal({ remove: false, edit: false, insert: false })}
                            />
                            <ModalInput>
                                <Input placeholder="Nombre del usuario" {...register("name")} />
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Contraseña" {...register("password")} />
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Email" {...register("email")} />
                            </ModalInput>
                            <ModalInput style={{ width: "220px " }}>
                                <Input style={{ width: "210px " }} type="date" placeholder="Fecha de nacimiento" {...register("birth")} />
                            </ModalInput>
                            <ModalInput style={{ width: "220px " }}>
                                <ComboBox name="format"
                                    id="format"  {...register("doc_type", { required: "Campo obligatorio" })}>
                                    <option value="Cedula">Cedula</option>
                                    <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                    <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                                    <option value="DNI">DNI</option>
                                </ComboBox>
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Numero de documento" {...register("doc_num")} />
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Numero de celular" {...register("phone_num")} />
                            </ModalInput>

                            <PlacesAutocomplete value={loc} onChange={setLoc} onSelect={handleAddress}>

                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (


                                    <ModalInput>

                                        <Input {...getInputProps({ placeholder: "Direccion de residencia" })}
                                            type="text" name="direccion" />
                                        <div>
                                            {loading && <div>...loading</div>}
                                            {suggestions.map((suggestions, index) => {
                                                const style = suggestions.active
                                                    ? { backgroundColor: "#ddd", cursor: "pointer" }
                                                    : { backgroundColor: "#fff", cursor: "pointer" };
                                                return <div key={index} {...getSuggestionItemProps(suggestions, { style })}
                                                    key={index}>{suggestions.description}</div>
                                            })}
                                        </div>
                                    </ModalInput>



                                )}


                            </PlacesAutocomplete>

                            <Options style={{ margin: "0px 0px 0px 455px " }}>
                                <BtnSend>Crear</BtnSend>
                                <BtnRemove onClick={() => setModal({
                                    remove: false,
                                    edit: false,
                                    inser: false
                                })}>Cancelar</BtnRemove>
                            </Options>


                        </form>
                    </Modal>
                </Background> : null}
            {modal.edit ?
                <Background>
                    <Modal>
                        <form form onSubmit={handleSubmit(onSubmit)}>
                            <CloseModal
                                aria-label='Close modal'
                                onClick={() => setModal({ remove: false, edit: false, insert: false })}
                            />
                            <ModalInput>
                                <Input {...register("name")} />
                            </ModalInput>
                            <ModalInput>
                                <Input {...register("password")} />
                            </ModalInput>
                            <ModalInput>
                                <Input  {...register("email")} />
                            </ModalInput>
                            <ModalInput>
                                <Input {...register("birth")} />
                            </ModalInput>
                            <ModalInput>
                                <Input {...register("doc_type")} />
                            </ModalInput>
                            <ModalInput>
                                <Input {...register("doc_num")} />
                            </ModalInput>
                            <ModalInput>
                                <Input {...register("phone_num")} />
                            </ModalInput>
                            <ModalInput>
                                <Input  {...register("role")} />
                            </ModalInput>
                            <PlacesAutocomplete value={loc} onChange={setLoc} onSelect={handleAddress}>

                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (


                                    <ModalInput>

                                        <Input {...register("address")} {...getInputProps({ placeholder: "Direccion de la sede" })}
                                            type="text" name="direccion" />
                                        <div>
                                            {loading && <div>...loading</div>}
                                            {suggestions.map((suggestions, index) => {
                                                const style = suggestions.active
                                                    ? { backgroundColor: "#ddd", cursor: "pointer" }
                                                    : { backgroundColor: "#fff", cursor: "pointer" };
                                                return <div key={index} {...getSuggestionItemProps(suggestions, { style })}
                                                    key={index}>{suggestions.description}</div>
                                            })}
                                        </div>
                                    </ModalInput>



                                )}


                            </PlacesAutocomplete>



                            <Options>
                                <BtnSend>Actualizar</BtnSend>
                                <BtnRemove onClick={() => {
                                    setModal({ remove: false, edit: false, insert: false })
                                }}>Cancelar</BtnRemove>
                            </Options>


                        </form>
                    </Modal>
                </Background> : null}
            {
                modal.remove ?
                    <Background>
                        <Modal>
                            <CloseModal
                                aria-label='Close modal'
                                onClick={() => setModal({ remove: false, edit: false, insert: false })}
                            />
                            <Title>
                                <H1>¿Esta seguro que desea eliminar el usuario?</H1>
                            </Title>

                            <OptionsRemove>
                                <BtnRemove onClick={() => confirm()}>Eliminar</BtnRemove>
                                <BtnEdit onClick={() => setModal({
                                    remove: false,
                                    edit: false,
                                    inser: false
                                })}>Cancelar</BtnEdit>
                            </OptionsRemove>
                        </Modal>
                    </Background> : null}


            <WrapperTable>

                <Tablas handleSelect={handleSelect} listUsers={listUsers} />
            </WrapperTable>


        </Container>
    )
}

export default Client
