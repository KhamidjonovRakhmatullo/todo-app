import styled from "styled-components";

export const TodoContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin-top: 150px ;
`;
export const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 30px 20px;
  background-color: #ffff;
  border-radius: 5px;
  width: 100%;
  max-width: 350px;
  min-height: 400px;
  max-height: 400px;
`;

export const TodoTitle = styled.h2`
  color: black;
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0px 0px 20px 0px;
`;
export const TextWrapper = styled.div`
color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;

border-radius: 5px;
background: rgba(55, 55, 55, 0.10);
padding: 10px 10px;

display: flex;
justify-content: space-between;
align-items: center;


`;
