import Tablas from './Tablas'
import React, {useEffect, useState} from 'react';
import {Container, WrapperTable} from '../Elements'
import {H1Header, HeaderMessage, HeaderTitle, Img, PHeader} from '../HeaderSection/HeaderSectionElements'
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';
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
import {BtnEdit, BtnRemove, BtnSend} from '../Btn'
import {useForm} from "react-hook-form";

import {addProduct, deleteProduct, editProduct, getProducts} from '../../../state/actions/productAction';

const Modal = styled.div`
  max-width: 900px;
  min-width: 700px;
  max-height: 800px;
  min-height: 750px;
  background: #fff;
  color: #000;
  position: absolute;
  z-index: 10;
  border-radius: 5px;
  -webkit-box-shadow: inset 0px -5px 15px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px -5px 15px -4px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px -5px 15px -4px rgba(0, 0, 0, 0.75);
`;

const Product = () => {
    const dispatch = useDispatch()
    const {user: currentUser} = useSelector((state) => state.auth);
    const listProduct = useSelector(state => state.productList)
    const listAvenue = useSelector(state => state.avenueList)
    const {avenueSelected} = listAvenue
    const [modal, setModal] = useState({
        remove: false,
        edit: false,
        insert: false
    })

    const [edit, setEdit] = useState({
        id: "",
        name: "",
        image: "",
        description: "",
        units: "",
        details: "",
        unit_price: "",
        promotion:""
    })
    const {register, handleSubmit, setValue} = useForm({
        defaultValues: edit
    })

    setValue('name', edit.name)
    setValue('id', edit.id)
    setValue('image', edit.image)
    setValue('description', edit.description)
    setValue('units', edit.units)
    setValue('unit_price', edit.unit_price)
    setValue('details', edit.details)
    setValue('category_id', edit.category_id)
    setValue('available', edit.available)
    setValue('promotion',edit.promotion?.id)
    const handleSelect = (select, data) => {

        setModal(select)
        setEdit(data)

    }

    const onSubmit = async (data) => {
        const form = new FormData()
            form.append("name",data.name)
            form.append("description",data.description)
            form.append("iva",19)
            form.append("units",data.units)
            form.append("details",data.details)
            form.append("available",true)
            form.append("category_id",data.category_id)
            form.append("unit_price",data.unit_price)
        
                    
        if (modal.insert === true) {
            if(data.promotion !== "" ){
                form.append("promotion",data.promotion)
            }
            form.append("image",data.upload_image[0])

            dispatch(addProduct(form, currentUser.Authorization)).then(response => {

                setModal({remove: false, edit: false, insert: false})
                dispatch(getProducts(avenueSelected))

            }).catch(error => {
                console.log(error.response)
            })
        } else {
            if (modal.edit === true) {
                form.append("promotion",data.promotion)
                form.append("id",data.id)
                dispatch(editProduct(form, currentUser.Authorization,avenueSelected)).then(() => {
                    setModal({remove: false, edit: false, insert: false})
                    dispatch(getProducts(avenueSelected))
                }).catch(error => {
                    console.log(error.response.data)
                })
            }

        }
    }

    const confirm = async () => {
        if (modal.remove === true) {
            dispatch(deleteProduct(edit.id, currentUser.Authorization,avenueSelected))
                .then(() => {
                    setModal({remove: false, edit: false, insert: false})
                    dispatch(getProducts(avenueSelected))
                }).catch(error => {
                console.log(error.response.data)
            })
        }
    }

    useEffect(() => {
        dispatch(getProducts(avenueSelected))
        console.log("hola soy el avenueSelected", avenueSelected)
    }, [dispatch,avenueSelected])

  

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
                                <Input placeholder="Nombre del producto" {...register("name")} />
                            </ModalInput>


                            <Input type="file" {...register("upload_image")} style={{margin: "0 0 0 55px"}}/>


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

                            
                            <ModalInput>
                                <Input placeholder="Id de descuento" {...register("promotion")} />
                            </ModalInput>

                            <Options>
                                <BtnSend style={{margin: "0 10px 20px 30px"}}>Crear</BtnSend>
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CloseModal
                                aria-label='Close modal'
                                onClick={() => setModal({remove: false, edit: false, insert: false})}
                            />
                            <ModalInputId>
                                <InputId   {...register("id")} readOnly/>
                            </ModalInputId>
                            <ModalInput>
                                <Input {...register("name")} />
                            </ModalInput>

                            <ModalInput>
                                <Input  type="file" {...register("upload_image")} />
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
                            <ModalInput>
                                <Input placeholder="Id de descuento" {...register("promotion")} />
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
                <Tablas handleSelect={handleSelect} listProduct={listProduct}/>

            </WrapperTable>


        </Container>
    )
}

export default Product
