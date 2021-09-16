import Tablas from './Tablas'
import React, {useEffect, useState} from 'react';
import {Container, WrapperTable} from '../Elements'
import {H1Header, HeaderMessage, HeaderTitle, Img, PHeader} from '../HeaderSection/HeaderSectionElements'
import {useDispatch, useSelector} from "react-redux";

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
} from './modalElements.js'
import {BtnEdit, BtnRemove, BtnSend} from '../Btn'
import {useForm} from "react-hook-form";
import styled from 'styled-components';
import {addUser, deleteUser, editUser, getUsers} from '../../../state/actions/userActions'

const Modal = styled.div`
  max-width: 900px;
  min-width: 700px;
  max-height: 900px;
  min-height: 800px;
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
    const {user: currentUser} = useSelector((state) => state.auth);
    const listUsers = useSelector(state => state.userList)
    const [modal, setModal] = useState({
        remove: false,
        edit: false,
        insert: false
    })

    const [edit, setEdit] = useState({id: "", name: "",email: "", doc_type: "", doc_num: "", birth: "", location: "", password: "", phone_num: ""})
    const {register, handleSubmit, setValue} = useForm({
        defaultValues: edit

    })
    setValue("name", edit.name)
    setValue("email",edit.email)
    setValue("doc_type",edit.doc_type)
    setValue("doc_num",edit.doc_num)
    setValue("birth",edit.birth)
    setValue("location",edit.location?.address)
    setValue("password",edit.password)
    setValue("phone_num",edit.phone_num)
    setValue("role",edit.role)

    
    const handleSelect = (select, data) => {

        setModal(select)
        setEdit(data)

    }

    const onSubmit = async (data) => {
        console.log(data)
        if (modal.insert === true) {

            delete data.id
            dispatch(addUser(data, currentUser.Authorization)).then(response => {
                setModal({remove: false, edit: false, insert: false})
                dispatch(getUsers(currentUser.Authorization))

            }).catch(error => {
                console.log(error.response)
            })
        } else {
            if (modal.edit === true) {

                dispatch(editUser(data, currentUser.Authorization)).then(response => {
                    setModal({remove: false, edit: false, insert: false})
                    dispatch(getUsers(currentUser.Authorization))
                }).catch(error => {
                    console.log(error.response.data)
                })
            }

        }
    }

    const confirm = async () => {
        if (modal.remove === true) {

            dispatch(deleteUser(edit.id, currentUser.Authorization))
                .then(response => {
                    setModal({remove: false, edit: false, insert: false})
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
                                onClick={() => setModal({remove: false, edit: false, insert: false})}
                            />
                            <ModalInput>
                                <Input placeholder="Nombre del usuario" {...register("name")} />
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Email" {...register("email")} />
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Fecha de nacimiento" {...register("birth")} />
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Tipo de documento" {...register("doc_type")} />
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Numero de documento" {...register("doc_num")} />
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Numero de celular" {...register("phone_num")} />
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Direccion" {...register("location")} />
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Cumpleaños" {...register("birth")} />
                            </ModalInput>

                            <Options>
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
                                onClick={() => setModal({remove: false, edit: false, insert: false})}
                            />
                           <ModalInput>
                                <Input {...register("name")} />
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
                                <Input {...register("location")} />
                            </ModalInput>
                            <ModalInput>
                                <Input  {...register("role")} />
                            </ModalInput>
                            <ModalInput>
                                <Input {...register("birth")} />
                            </ModalInput>

                            <Options>
                                <BtnSend>Actualizar</BtnSend>
                                <BtnRemove onClick={() => {
                                    setModal({remove: false, edit: false, insert: false})
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
                                onClick={() => setModal({remove: false, edit: false, insert: false})}
                            />
                            <Title>
                                <H1>¿Esta seguro que desea eliminar la categoria?</H1>
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

                <Tablas handleSelect={handleSelect} listUsers={listUsers}/>
            </WrapperTable>


        </Container>
    )
}

export default Client
