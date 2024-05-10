import styled from "styled-components";
import img from '../asserts/todoImg.jpg'


export const HomeContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 800px;
background-image: url(${img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;

`

export const List1 =styled.div`
display: flex;
justify-content: center;
align-items: center;
border: "1px solid red";
background-color: #D2B48C;
width: 100%;
width: 200px;
height: 130px;
border-radius:25px ;
padding: 20px;
border: 2px solid #D2B48C;
box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
background-image: ${img};
&:hover{
    background-color: transparent;
    color: #8B4513;
border: 2px solid #8B4513;

    transform: scale(1.05);
    transition: all 0.5s ease 0s;
    cursor: pointer;
}


color: var(--blue, #8B4513);
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;

`

export const Title =styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 40px;
border-bottom: 2px solid #8B4513;

color: var(--blue, #8B4513);
font-family: Montserrat;
font-size: 45px;
font-style: normal;
font-weight: 600;
line-height: normal;
`