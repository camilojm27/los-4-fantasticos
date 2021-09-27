import Tablas from './Tablas'
import React, { useEffect, useState } from 'react';
import { Container, WrapperTable } from '../Elements'

import { useDispatch, useSelector } from "react-redux";

import {
    Background,
    CloseModal,
    H1,
    Input,
    InputId,
    ModalInput,
    ModalInputId,
    Options,
    OptionsRemove,
    Title
} from '../Category/modalElements'
import { BtnEdit, BtnRemove, BtnSend } from '../Btn'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { addAvenue, deleteAvenue, editAvenue, getAvenue } from '../../../state/actions/avenuesAction'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete"

const Modal = styled.div`
  max-width: 900px;
  min-width: 700px;
  max-height: 600px;
  min-height: 300px;
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

const Avenue = () => {
    const dispatch = useDispatch()
    const { user: currentUser } = useSelector((state) => state.auth);
    const listAvenue = useSelector(state => state.avenueList)
    const [loc, setLoc] = useState("")
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null })
    const [modal, setModal] = useState({
        remove: false,
        edit: false,
        insert: false
    })

    const [edit, setEdit] = useState({ id: "", site: "", open_time: "", close_time: "", address: "" })
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: edit

    })
   
    useEffect(() =>  { setValue('id', edit.id)
    setValue('site', edit.site)
    setValue('open_time', edit.open_time)
    setValue('close_time', edit.close_time)
    setValue('address', edit.address)},[edit])
    const handleSelect = (select, data) => {

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
            data.longitude = coordinates.lng
            data.latitude = coordinates.lat
            data.address = loc
            delete data.id
            console.log(data)
            dispatch(addAvenue(data, currentUser.Authorization)).then(response => {
                setModal({ remove: false, edit: false, insert: false })
                dispatch(getAvenue())

            }).catch(error => {
                console.log(error.response)
            })
        } else {
            if (modal.edit === true) {
                if(loc === ""){
                    const results = await geocodeByAddress(data.address);
                    const latLng = await getLatLng(results[0]);
                    data.latitude = latLng.lat
                    data.longitude = latLng.lng
                    console.log("soy address1", data.address, "soy coord1", data.longitude,data.latitude)
                }else{
                    data.latitude = coordinates.lat
                    data.longitude = coordinates.lng
                    data.address = loc
                    console.log("soy loc2", loc, "soy coord2", data.longitude,data.latitude)
                }
                
                
                dispatch(editAvenue(data, currentUser.Authorization)).then(response => {
                    setModal({ remove: false, edit: false, insert: false })
                    dispatch(getAvenue())
                }).catch(error => {
                    console.log(error.response.data)
                })
            }

        }
    }

    const confirm = async () => {
        if (modal.remove === true) {

            dispatch(deleteAvenue(edit.id, currentUser.Authorization))
                .then(response => {
                    setModal({ remove: false, edit: false, insert: false })
                    dispatch(getAvenue())
                }).catch(error => {
                    console.log(error.response.data)
                })
        }
    }

    useEffect(() => {
        dispatch(getAvenue())
  
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
                            <ModalInputId>
                                <InputId placeholder="Id" readOnly />
                            </ModalInputId>
                            <ModalInput>
                                <Input placeholder="Sitio" {...register("site")} />
                            </ModalInput>

                            <ModalInput>
                                <Input placeholder="Hora de apertura" {...register("open_time")} />
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Hora de cerrado" {...register("close_time")} />
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
                                                            ? {backgroundColor: "#ddd", cursor: "pointer"}
                                                            : {backgroundColor: "#fff", cursor: "pointer"};
                                                        return <div {...getSuggestionItemProps(suggestions, {style})}
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
                            <ModalInputId>
                                <InputId placeholder="Id" readOnly />
                            </ModalInputId>
                            <ModalInput>
                                <Input placeholder="Sitio" {...register("site")} />
                            </ModalInput>

                            <ModalInput>
                                <Input placeholder="Hora de apertura" {...register("open_time")} />
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Hora de cerrado" {...register("close_time")} />
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
                                <H1>¿Esta seguro que desea eliminar la sede?</H1>
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

                <Tablas handleSelect={handleSelect} listAvenue={listAvenue} />
            </WrapperTable>


        </Container>
    )
}

export default Avenue
