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
import { getPromotion,addPromotion,editPromotion,deletePromotion } from '../../../state/actions/promotionAction'

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

const Promotion = () => {
    const dispatch = useDispatch()
    const { user: currentUser } = useSelector((state) => state.auth);
    const listPromotion = useSelector(state => state.promotionList)
    const [modal, setModal] = useState({
        remove: false,
        edit: false,
        insert: false
    })

    const [edit, setEdit] = useState({ id: "", end_date: "", title: "", close_time: "", discount: "" })
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: edit

    })

    useEffect(() => {
        setValue('id', edit.id)
        setValue('start_date', edit.start_date)
        setValue('end_date', edit.end_date)
        setValue('title', edit.title)
        setValue('discount', edit.discount)
    }, [edit])
    const handleSelect = (select, data) => {

        setModal(select)
        setEdit(data)

    }

  


    const onSubmit = async (data) => {

        if (modal.insert === true) {
            delete data.id
            console.log(data)
            dispatch(addPromotion(data, currentUser.Authorization)).then(response => {
                setModal({ remove: false, edit: false, insert: false })
                dispatch(getPromotion())

            }).catch(error => {
                console.log(error.response)
            })
        } else {
            if (modal.edit === true) {

                dispatch(editPromotion(data, currentUser.Authorization)).then(response => {
                    setModal({ remove: false, edit: false, insert: false })
                    dispatch(getPromotion())
                }).catch(error => {
                    console.log(error.response.data)
                })
            }

        }
    }

    const confirm = async () => {
        if (modal.remove === true) {

            dispatch(deletePromotion(edit.id, currentUser.Authorization))
                .then(response => {
                    setModal({ remove: false, edit: false, insert: false })
                    dispatch(getPromotion())
                }).catch(error => {
                    console.log(error.response.data)
                })
        }
    }

    useEffect(() => {
        dispatch(getPromotion())
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
                                <Input placeholder="Fecha de inicio YYYY-MM-DD" {...register("start_date")} />
                            </ModalInput>

                            <ModalInput>
                                <Input placeholder="Fecha de finalizacion YYYY-MM-DD" {...register("end_date")} />
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Titulo de el descuento " {...register("title")} />
                            </ModalInput>

                            <ModalInput>
                                <Input placeholder="Descuento (E.J: 20 es 20%)" {...register("discount")} />
                            </ModalInput>

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
                                <Input placeholder="Fecha de inicio YYYY-MM-DD" {...register("start_date")} />
                            </ModalInput>

                            <ModalInput>
                                <Input placeholder="Fecha de finalizacion YYYY-MM-DD" {...register("end_date")} />
                            </ModalInput>
                            <ModalInput>
                                <Input placeholder="Titulo de el descuento " {...register("title")} />
                            </ModalInput>

                            <ModalInput>
                                <Input placeholder="Descuento" {...register("discount")} />
                            </ModalInput>


                    
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
                                <H1>¿Esta seguro que desea eliminar el descuento?</H1>
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

                <Tablas handleSelect={handleSelect} listPromotion={listPromotion} />
            </WrapperTable>


        </Container>
    )
}

export default Promotion
