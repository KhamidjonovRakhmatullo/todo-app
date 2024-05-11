import img3 from "../asserts/bg3.webp";
import styled from "styled-components";

export const TodoApp03Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  background-image: url(${img3});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(to right, lightgreen, rgb(0, 100, 200));
`;

export const TodoApp03Box = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  background-color: transparent;
  border-radius: 15px;
  padding: 20px 15px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;

  width: 100%;
  max-width: 450px;
  min-height: 350px;
  max-height: 350px;
`;

export const TodoTitle =styled.div`
display: flex;
justify-content: center;
color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

export const InputAndButtonWrapper =styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
width: 100%;
margin: 20px 0px 15px 0px;
`
export const AddButton =styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 11px 30px;
border-radius: 6px;
border: none;
background-color: white;
  filter: blur(0.4px);
cursor: pointer;
opacity: 0.6;
&:hover{
  color: green;
}
`

export const InputBox =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid #F0F8FF;
padding: 6px 10px ;
border-radius: 10px;
margin-bottom: 7px;
background-color:#F0F8FF;
z-index: 1000;
&:hover{
    background-color: transparent;
    color: #F0F8FF;
z-index: 1000;
    transform: scale(1.02);
    transition: all 0.4s ease 0s;
    cursor: pointer;
}
`
