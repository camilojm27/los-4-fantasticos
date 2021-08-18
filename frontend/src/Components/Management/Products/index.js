
import Tablas from './Tablas'
import React, { useState, useEffect } from 'react';
import { Container, WrapperTable } from '../Elements'
import { HeaderMessage, HeaderTitle, Img, H1Header, PHeader } from '../HeaderSection/HeaderSectionElements'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { Background, CloseModal, Input, ModalInput, ModalInputId, InputId, Options, OptionsRemove, H1, Title } from '../Category/modalElements'
import { BtnRemove, BtnSend, BtnEdit } from '../Btn'
import { useForm } from "react-hook-form";

import { addProduct, getProducts, editProduct, deleteProduct } from '../../../actions/productAction';

const Modal = styled.div`
  max-width: 900px;
  min-width:700px;
  max-height: 900px;
  min-height:300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;

  position: absolute;
  z-index: 10;
  border-radius: 5px;
  -webkit-box-shadow: inset 0px -5px 15px -4px rgba(0,0,0,0.75);
-moz-box-shadow: inset 0px -5px 15px -4px rgba(0,0,0,0.75);
box-shadow: inset 0px -5px 15px -4px rgba(0,0,0,0.75);

`;

const Product = () => {
  const dispatch = useDispatch()
  const { user: currentUser } = useSelector((state) => state.auth);
  const listProduct = useSelector(state => state.productList)
  const [modal, setModal] = useState({
    remove: false,
    edit: false,
    insert: false
  })

  const [edit, setEdit] = useState({ id: "", name: "", image: "", description: "", units: "", details: "", unit_price: "" })
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: edit
  })

  setValue('name', edit.name)
  setValue('id', edit.id)
  setValue('image', edit.image)
  setValue('description', edit.description)
  setValue('units', edit.units)
  setValue('unit_price', edit.unit_price)
  setValue('details', edit.details)
  const handleSelect = (select, data) => {

    setModal(select)
    setEdit(data)

  }
  const API_URI = "https://ricuritas.herokuapp.com/api/product"

  const onSubmit = async (data) => {

    if (modal.insert === true) {
      data.iva = 19
      data.available = true
      data.units = parseInt(data.units, 10)
      data.unit_price = parseInt(data.unit_price,10)
      data.category_id = parseInt(data.category_id,10)
      
      dispatch(addProduct(data, currentUser.Authorization)).then(response => {
        setModal({ remove: false, edit: false, insert: false })
        dispatch(getProducts())

      }).catch(error => {
        console.log(error.response)
      })
    }
    else {
      if (modal.edit === true) {

        dispatch(editProduct(data, currentUser.Authorization)).then(response => {
          setModal({ remove: false, edit: false, insert: false })
          dispatch(getProducts())
        }).catch(error => {
          console.log(error.response.data)
        })
      }

    }
  }

  const confirm = async () => {
    if (modal.remove === true) {
      dispatch(deleteProduct(edit.id, currentUser.Authorization))
        .then(response => {
          setModal({ remove: false, edit: false, insert: false })
          dispatch(getProducts())
        }).catch(error => {
          console.log(error.response.data)
        })
    }
  }

  useEffect(() => {
    dispatch(getProducts())
    console.log(listProduct)
  }, [dispatch])




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

              <ModalInput>
                <Input placeholder="Nombre del producto" {...register("name")} />
              </ModalInput>

              <ModalInput>
                <Input placeholder="Imagen" {...register("image")} />
              </ModalInput>

              <ModalInput>
                <Input placeholder="Descripcion" {...register("description")} />
              </ModalInput>

              <ModalInput>
                <Input type="number" placeholder="Unidades" {...register("units")} />
              </ModalInput>

              <ModalInput>
                <Input type="number" placeholder="precio" {...register("unit_price")} />
              </ModalInput>

              <ModalInput>
                <Input type="number" placeholder="Categoria" {...register("category_id")} />
              </ModalInput>

              <ModalInput>
                <Input placeholder="Detalles" {...register("details")} />
              </ModalInput>

              <Options>
                <BtnSend style={{ margin: "0 10px 20px 30px" }}>Crear</BtnSend>
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
                <InputId   {...register("id")} readOnly />
              </ModalInputId>
              <ModalInput>
                <Input {...register("name")} />
              </ModalInput>

              <ModalInput>
                <Input  {...register("image")} />
              </ModalInput>

              <ModalInput>
                <Input  {...register("description")} />
              </ModalInput>

              <ModalInput>
                <Input type="number" {...register("units")} />
              </ModalInput>

              <ModalInput>
                <Input type="number" {...register("unit_price")} />
              </ModalInput>

              <ModalInput>
                <Input type="number" placeholder="categoria" {...register("category_id")} />
              </ModalInput>

              <ModalInput>
                <Input {...register("details")} />
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
              Bienvenido al panel de los productos
            </PHeader>
          </H1Header>


        </HeaderTitle>
      </HeaderMessage>

      <WrapperTable>
        <Tablas handleSelect={handleSelect} listProduct={listProduct} />
      </WrapperTable>


    </Container>
  )
}

export default Product
