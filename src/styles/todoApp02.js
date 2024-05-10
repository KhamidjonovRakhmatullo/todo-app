import img3 from "../asserts/bg3.webp";
import styled from "styled-components";


export const TodoBox02Container =styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 800px;
/* background-color: #4169E1; */
background-image: url(${img3});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const TodoApp02Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  border-radius: 15px;
  padding: 20px 15px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;


  width: 100%;
  max-width: 350px;
  min-height: 350px;
  max-height: 350px;
`;

export const TodoBox =styled.div`
border: 1.6px solid silver;
padding: 5px 10px;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 6px;
background-color: #87CEEB;
`

export const TextBoxWrapper =styled.div`
overflow: scroll;
display: flex;
flex-direction: column;
gap: 8px;
`
