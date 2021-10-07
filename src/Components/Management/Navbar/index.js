import './Navbar.css'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { useEffect } from 'react';
import { avenueSelected, getAvenue } from '../../../state/actions/avenuesAction'
import { useForm } from 'react-hook-form';

const ComboBox = styled.select`
border-color: rgb(135, 133, 44);
border-radius: 3px;
line-height: 1;
font-weight: 600;
font-size: 1rem;
color: #eee;
width: 150px;
height: 40px;
margin-left: 10px; 
outline:0;
box-shadow:none;
border:0!important;
background-image: none;
flex: 1;
padding: 0 .5em;
color:#fff;
cursor:pointer;
font-size: 1em;
font-family: 'Open Sans', sans-serif;

background:#717377;
@media screen and (max-width: 530px) {

font-size: 0.5rem;
width: 95px;

}

@media screen and (max-width: 345px) {

font-size: 0.45rem;
width: 85px;}

`
const Navbar = ({ sidebarOpen, openSidebar }) => {

    const dispatch = useDispatch()

    const { user: currentUser } = useSelector((state) => state.auth);
    const listAvenue = useSelector(state => state.avenueList)

    const {register, handleSubmit} = useForm()

    useEffect(() => {
        dispatch(getAvenue())
        console.log(listAvenue)

    }, [])

    const { loading, avenues } = listAvenue

    const captureType = (e) => {
        console.log(e.target.value)
        dispatch(avenueSelected(e.target.value))
    }
    

    return (
        <nav className="navbar">

            <div className="navbar__left">
                <a className="active_link" href="/">
                    {currentUser === null ? "user" : currentUser.user.name}
                </a>
            </div>
            <div className="navbar__right">
                <h3>Sede</h3>
                <form onSelect={handleSubmit(onsubmit)}>

                </form>
                <ComboBox name="format" onChange={captureType}>

                    <option value={1}>Caney</option>

                    {avenues.restaurants && avenues.restaurants.map(item => (
                        item.available === true ? 
                        (item.site !== "Caney" ? <option value={item.id}  >{item.site}</option>: null ) : null
                    ))
                    }


                </ComboBox>
                <a href="/">
                    <img width="30" src="https://res.cloudinary.com/kentruri/image/upload/v1619027635/avatar_h4orl7.svg"
                        alt="avatar" />
                </a>
            </div>
        </nav >
    );
};

export default Navbar;
