import Tablas from './Tablas'
import React, {useEffect, useState} from 'react';
import {Container, WrapperTable} from '../Elements'

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
} from './modalElements'
import {BtnEdit, BtnRemove, BtnSend} from '../Btn'
import {useForm} from "react-hook-form";
import styled from 'styled-components';
import {addCategory, deleteCategory, editCategory, getCategory} from '../../../state/actions/categoryAction'

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

const Category = () => {
    const dispatch = useDispatch()
    const {user: currentUser} = useSelector((state) => state.auth);
    const listCategory = useSelector(state => state.categoryList)
    const [modal, setModal] = useState({
        remove: false,
        edit: false,
        insert: false
    })

    const [edit, setEdit] = useState({id: "", name: ""})
    const {register, handleSubmit, setValue} = useForm({
        defaultValues: edit

    })
    setValue('name', edit.name)
    setValue('id', edit.id)
    const handleSelect = (select, data) => {

        setModal(select)
        setEdit(data)

    }

    const onSubmit = async (data) => {
        console.log(data)
        if (modal.insert === true) {

            delete data.id
            dispatch(addCategory(data, currentUser.Authorization)).then(response => {
                setModal({remove: false, edit: false, insert: false})
                dispatch(getCategory())

            }).catch(error => {
                console.log(error.response)
            })
        } else {
            if (modal.edit === true) {

                dispatch(editCategory(data, currentUser.Authorization)).then(response => {
                    setModal({remove: false, edit: false, insert: false})
                    dispatch(getCategory())
                }).catch(error => {
                    console.log(error.response.data)
                })
            }

        }
    }

    const confirm = async () => {
        if (modal.remove === true) {

            dispatch(deleteCategory(edit.id, currentUser.Authorization))
                .then(response => {
                    setModal({remove: false, edit: false, insert: false})
                    dispatch(getCategory())
                }).catch(error => {
                console.log(error.response.data)
            })
        }
    }

    useEffect(() => {
        dispatch(getCategory())
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
                            <ModalInputId>
                                <InputId placeholder="Id" readOnly/>
                            </ModalInputId>
                            <ModalInput>
                                <Input placeholder="Nombre de la categoria" {...register("name")} />
                            </ModalInput>

                            <Options style={{margin: "0px 0px 0px 455px "}}>
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
                            <ModalInputId>
                                <InputId value={edit.id}  {...register("id")} readOnly/>
                            </ModalInputId>
                            <ModalInput>
                                <Input type="text" {...register("name")} />
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

                <Tablas handleSelect={handleSelect} listCategory={listCategory}/>
            </WrapperTable>


        </Container>
    )
}

export default Category
