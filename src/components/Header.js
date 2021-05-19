import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice'
import {useSelector} from 'react-redux';
function Header() {

    const[burgerStatus,setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car,index) => {

                <a key={index} href="#">{car}</a>
                })}
                
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true) } />

                <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>
                    
                    <li><a href="#">Model X</a></li>
                    <li><a href="#">Model Y</a></li>
                    <li><a href="#">Model S</a></li>
                    <li><a href="#">Model 3</a></li>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-In</a></li>
                    <li><a href="#">CyberTruck</a></li>
                    <li><a href="#">Rodaster</a></li>
                    <li><a href="#">Semi</a></li>
                    <li><a href="#">Test-Drive</a></li>
                </BurgerNav>
            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight:600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width:768px){
        display: none;
    }
`
const RightMenu = styled.div `
    display: flex;
    align-items: center;
    a{
        font-weight:600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div `
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background: white;
    width: 300px;
    z-index: 16;
    border-radius:10px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transition: transform 0.3s ease-in-out;

    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        font-weight: 600;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`