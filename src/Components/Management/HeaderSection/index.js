import React, {useEffect, useState} from 'react'
import {
    H1Header,
    H2Header,
    HeaderContainer,
    HeaderMessage,
    HeaderTitle,
    HeaderWrapper,
    Img,
    PHeader
} from './HeaderSectionElements'
import { useSelector } from "react-redux";
import {Bar} from 'react-chartjs-2'

import styled from 'styled-components';
import axios from "axios";

const RegisterGridInput = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  width: 500px;
  
`

const RegisterInput = styled.div`
  max-width: 250px;
  background-color: #ddd;
  margin:50px 0px;
  height: 50px;
  border-radius: 55px;

  width:230px;
  
  @media screen and (max-width: 530px){

   width:150px;

}

@media screen and (max-width: 345px){

width:135px;

}


  
`

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1rem;
  color: #666;

  margin-top: 15px;
  margin-left: 15px;
  cursor: text;
  background: none;
`
const InputProduct = styled.input`
background: #fff;
outline: none;
border: #ddd;
border-radius: 3px;
border-color: #ddd;
line-height: 1;
font-weight: 600;
font-size: 1rem;
color: #666;
width:230px;
height: 50px;
margin-top: 50px;
margin-bottom: 50px;


`



const Btn = styled.button`
   border-radius: 5px;
   background: #A7A7A7;
   white-space: nowrap;
   padding: 12px 20px;
   color: #fff;
   font-size: 13px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   font-family: 'RocknRoll One', sans-serif;
   margin-right: 10px;
   margin-bottom: -100px;


   &:hover{
      transition: all 0.2s ease-in-out;
      background: #767676;
      color: #fff;
   }

`


const types = ['Top 20 productos mas vendidos', 'Top 20 Productos menos vendidos', 'Sede de restaurante con mas ventas',
    'Sede de restaurante con menos ventas', 'Cumpleaños el proximo mes']

const backgroundColor = [
        "#800000",
        "#9A6324",
        "#808000",
        "#469990",
        "#000075",
        "#000000",
        "#e6194B",
        "#f58231",
        "#ffe119",
        "#bfef45",
        "#3cb44b",
        "#42d4f4",
        "#4363d8",
        "#911eb4",
        "#f032e6",
        "#a9a9a9",
        "#fabed4",
        "#ffd8b1",
        "#fffac8",
        "#aaffc3",
    ]

function HeaderSection() {

    const { user: currentUser } = useSelector((state) => state.auth);
    const {Authorization} = currentUser
    const API = 'https://ricuritas.herokuapp.com/api'


    function SingleProductChart() {
        const [productData, setProductData] = useState(null);
        const [productID, setProductID] = useState(null);

        const handlePetition = () => {
            axios.get(API + '/order/monthly-sales/'+ productID, {headers: {Authorization}}).then((data)=>setProductData(data.data))
        }

        return(
            <HeaderMessage>
                <H1Header>
                    Generar reporte del producto
                </H1Header>

                <Btn onClick={handlePetition}>Numero de ventas del producto</Btn>

                <InputProduct type='number' placeholder="id del producto" onChange={(e)=> setProductID(e.target.value)}/>

                {
                    productData && <Bar data={{
                        labels: productData.months,
                        datasets: [{
                            label: 'Reporte últimos 6 meses',
                            data: productData.quantities,
                            backgroundColor,
                        }]
                    }}/>
                }

            </HeaderMessage>
        )

    }  function DateChart() {
        const [productData, setProductID] = useState(null);
        const [startDate, setStartDate] = useState(null);
        const [endDate, setEndDate] = useState(null);

        const handlePetition = () => {
            if (startDate === null){return}
            if (endDate === null){return}

            axios.get(API + `/order/sales/${startDate}/${endDate}`, {headers: {Authorization}}).then((data)=>setProductID(data.data))

        }


        return(
            <HeaderMessage>
                <H1Header style={{ margin: "-60px 0px 10px 0px" }}>
                    Reporte de
                </H1Header>
                <Btn onClick={handlePetition}>Ventas por fecha</Btn>
                <form>
                    <RegisterGridInput>
                        <H2Header>Fecha inicial</H2Header>
                        <RegisterInput>

                            <Input type="date" onChange={(e)=> {
                                setStartDate(e.target.value)
                                handlePetition()
                            }}/>
                        </RegisterInput>

                        <H2Header>Fecha final</H2Header>

                        <RegisterInput>

                            <Input type="date" onChange={(e)=> {
                                setEndDate(e.target.value)
                                handlePetition()
                            }}/>

                        </RegisterInput>

                        {
                            productData && <Bar data={{
                                labels: productData.dates,
                                datasets: [{
                                    label: 'Reporte POR Fechas',
                                    data: productData.totals,
                                    backgroundColor,
                                }]
                            }}/>
                        }
                    </RegisterGridInput>
                </form>
                <HeaderTitle>


                </HeaderTitle>
            </HeaderMessage>


        )

    }

    function TabGroup() {
        const [active, setActive] = useState(types[0]);
        const [topSelling, setTopSelling] = useState(null);
        const [lessSelling, setLessSelling] = useState(null);
        const [bestSellingRes, setBestSellingRes] = useState(null);
        const [worstSellingRes, setWorstSellingRes] = useState(null);
        const [birthday, setBirthday] = useState(null);


        useEffect(()=> {
            axios.get(API + '/product/top-selling/20', {headers: {Authorization}}).then((data)=>setTopSelling(data.data))
            axios.get(API + '/product/less-selling/20', {headers: {Authorization}}).then((data)=>setLessSelling(data.data))
            axios.get(API + '/restaurant/best/selling', {headers: {Authorization}}).then((data)=>setBestSellingRes(data.data))
            axios.get(API + '/restaurant/worst/selling', {headers: {Authorization}}).then((data)=>setWorstSellingRes(data.data))
            axios.get(API + '/user/upcoming-birthdays', {headers: {Authorization}}).then((data)=>setBirthday(data.data))
        }, [])
        return (
            <section style={{marginTop: '10'}}>
                <div>
                    {types.map((type) => (
                        <Btn
                            key={type}
                            active={active === type}
                            onClick={() => setActive(type)}
                        >
                            {type}
                        </Btn>
                    ))}
                </div>
                {
                    active === types[0] && topSelling && <Bar data={{
                        labels: topSelling.products,
                        datasets: [{
                            label: types[0],
                            data: topSelling.totals,
                            backgroundColor,
                        }]
                    }}/>
                }

                {
                    active === types[1] && lessSelling && <Bar data={{
                        labels: lessSelling.products,
                        datasets: [{
                            label: types[1],
                            data: lessSelling.totals,
                            backgroundColor,
                        }]
                    }}/>
                }

                {
                    active === types[2] && bestSellingRes && <Bar data={{
                        labels: bestSellingRes.restaurants,
                        datasets: [{
                            label: types[2],
                            data: bestSellingRes.totals,
                            backgroundColor,
                        }]
                    }}/>
                }
                {
                    active === types[3] && worstSellingRes && <Bar data={{
                        labels: worstSellingRes.restaurants,
                        datasets: [{
                            label: types[3],
                            data: worstSellingRes.totals,
                            backgroundColor,
                        }]
                    }}/>
                }
                {
                    active === types[4] && birthday &&
                        <div>
                            <a href={birthday.doc} target='_blank' rel='noreferrer'>
                                <br/>
                                <h3>CUMPLEAÑOS</h3>
                            </a>
                        </div>

                }

            </section>
        );
    }
    return (
        <HeaderContainer>
            <HeaderWrapper>

                <HeaderMessage>


                    <HeaderTitle>
                        <Img src="https://res.cloudinary.com/kentruri/image/upload/v1619027662/hello_pajcbd.svg" />
                        <H1Header>
                            Hola {currentUser === null ? "user" : currentUser.user.name}
                            <PHeader>
                                Bienvenido al panel de administracion
                            </PHeader>

                        </H1Header>


                    </HeaderTitle>
                </HeaderMessage>

                <HeaderMessage>
                    <H1Header>
                        Generar
                    </H1Header>

                    <TabGroup/>

                    <HeaderTitle>


                    </HeaderTitle>
                </HeaderMessage>

                <SingleProductChart/>

                        <DateChart/>





            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default HeaderSection
