
import Tablas from './Tablas'
import React, { useState } from 'react';
import { Container, WrapperTable } from '../Elements'
import { HeaderMessage, HeaderTitle, Img, H1Header, PHeader } from '../HeaderSection/HeaderSectionElements'
import { useSelector } from "react-redux";

import { Background, Modal, CloseModal, Input, ModalInput, ModalInputId, InputId, Options, OptionsRemove, H1, Title } from './modalElements'
import { BtnRemove, BtnSend, BtnEdit } from '../Btn'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { FaWindows } from 'react-icons/fa';


const Category = () => {

  const { user: currentUser } = useSelector((state) => state.auth);
  const [modal, setModal] = useState({
    remove: false,
    edit: false,
    insert: false
  })

  const [edit, setEdit] = useState({ id: "", name: "" })
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: edit

  })
  setValue('name', edit.name)
  setValue('id', edit.id)
  const handleSelect = (select, data) => {

    setModal(select)
    setEdit(data)

  }

  const API_URI = "https://ricuritas.herokuapp.com/api/category"
  const onSubmit = async (data) => {
    console.log(data)
    if (modal.insert === true) {

      delete data.id
      console.log(data)
      await axios.post(API_URI, data, {
        headers: {
          'Authorization': currentUser.Authorization
        }
      }).then(response => {
        setModal({ remove: false, edit: false, insert: false })
        window.location.reload();

      }).catch(error => {
        console.log(error)
      })


    }

    else {
      if (modal.edit === true) {
        const id = data.id

        await axios.put(API_URI + "/" + id, data, {
          headers: {
            'Authorization': currentUser.Authorization
          }
        }).then(response => {
          setModal({ remove: false, edit: false, insert: false })
          window.location.reload();
        }).catch(error => {
          console.log(error.response.data)
        })
      }
      
    }


  }

  const confirm = async () => {
    console.log("hola")
    if (modal.remove === true) {
      const id = edit.id

      await axios.delete(API_URI + "/" + id, {
        headers: {
          'Authorization': currentUser.Authorization
        }
      }).then(response => {
        setModal({ remove: false, edit: false, insert: false })
        window.location.reload();
      }).catch(error => {
        console.log(error.response.data)
      })
    }
  }





  return (

    <Container>
      {modal.insert ?
        <Background>
          <Modal>
            <form onSubmit={handleSubmit(onSubmit)} >
              <CloseModal
                aria-label='Close modal'
                onClick={() => setModal({ remove: false, edit: false, insert: false })}
              />
              <ModalInputId>
                <InputId placeholder="Id" readOnly />
              </ModalInputId>
              <ModalInput>
                <Input placeholder="Nombre de la categoria" {...register("name")} />
              </ModalInput>

              <Options>
                <BtnSend>Crear</BtnSend>
                <BtnRemove onClick={() => setModal({ remove: false, edit: false, inser: false })}>Cancelar</BtnRemove>
              </Options>



            </form>
          </Modal>
        </Background> : null}
      {modal.edit ?
        <Background>
          <Modal>
            <form form onSubmit={handleSubmit(onSubmit)} >
              <CloseModal
                aria-label='Close modal'
                onClick={() => setModal({ remove: false, edit: false, insert: false })}
              />
              <ModalInputId>
                <InputId value={edit.id}  {...register("id")} readOnly />
              </ModalInputId>
              <ModalInput>
                <Input type="text" {...register("name")} />
              </ModalInput>

              <Options>
                <BtnSend>Actualizar</BtnSend>
                <BtnRemove onClick={() => setModal({ remove: false, edit: false, inser: false })}>Cancelar</BtnRemove>
              </Options>


            </form>
          </Modal>
        </Background> : null}
      {
        modal.remove ?
          <Background>
            <Modal >
              <CloseModal
                aria-label='Close modal'
                onClick={() => setModal({ remove: false, edit: false, insert: false })}
              />
              <Title>
                <H1>¿Esta seguro que desea eliminar la categoria?</H1>
              </Title>

              <OptionsRemove>
                <BtnRemove onClick={() => confirm()}>Eliminar</BtnRemove>
                <BtnEdit onClick={() => setModal({ remove: false, edit: false, inser: false })}>Cancelar</BtnEdit>
              </OptionsRemove>
            </Modal>
          </Background> : null}
      <HeaderMessage>


        <HeaderTitle >
          <Img src="https://res.cloudinary.com/kentruri/image/upload/v1619027662/hello_pajcbd.svg" />
          <H1Header>
            Hola {currentUser === null ? "user" : currentUser.user.name}
            <PHeader>
              Bienvenido al panel de las Categorias
            </PHeader>
          </H1Header>


        </HeaderTitle>
      </HeaderMessage>

      <WrapperTable>
        <Tablas handleSelect={handleSelect} />
      </WrapperTable>


    </Container>
  )
}

export default Category
