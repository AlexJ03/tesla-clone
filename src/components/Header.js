import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="logo" />
            </a>
            <Menu>
                <a href="#modelS">Model S</a>
                <a href="#model3">Model 3</a>
                <a href="#modelX">Model X</a>
                <a href="#modelY">Model Y</a>
                <a href="#solarRoof">Solar Roof</a>
                <a href="#solarPanels">Solar Panels</a>
                <a href="#accessories">Accessories</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li>
                    <a href="#">Existing Inventory</a>
                </li>
                <li>
                    <a href="#">Used Inventory</a>
                </li>
                <li>
                    <a href="#">Trade-in</a>
                </li>
                <li>
                    <a href="#">Cybertrack</a>
                </li>
                <li>
                    <a href="#">Roadaster</a>
                </li>
                <li>
                    <a href="#">Existing Inventory</a>
                </li>
                <li>
                    <a href="#">Existing Inventory</a>
                </li>
            </BurgerNav>
        </Container>
    );
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 500;
        padding: 5px 10px;
        flex-wrap: nowrap;
        border-radius: 5px;
        transition: background 0.2s;
        &:hover {
            background: rgba(41, 41, 41, 0.2);
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 500;
        margin-right: 10px;
        flex-wrap: nowrap;
        padding: 5px 10px;
        border-radius: 5px;
        transition: background 0.2s;
        &:hover {
            background: rgba(41, 41, 41, 0.2);
        }
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.2s;
    &:hover {
        background: rgba(41, 41, 41, 0.2);
    }
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${(props) =>
        props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.2s;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    a {
        font-weight: 600;
    }
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.2s;
    &:hover {
        background: rgba(41, 41, 41, 0.2);
    }
`;
