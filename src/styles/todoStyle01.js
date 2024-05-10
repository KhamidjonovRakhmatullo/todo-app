import styled from "styled-components";
import img2 from "../asserts/bg2.webp";

export const TodoContainer = styled.div`
  background-image: url(${img2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  height: 700px;
  /* background: linear-gradient(
    -45deg,
    rgb(238, 119, 82),
    rgb(231, 60, 126),
    rgb(35, 166, 213),
    rgb(35, 213, 171)
  )
  0% 0% / 400% 400%; */
`;
export const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 30px 20px;
  background-color: #ffff;
  border-radius: 10px;
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
  background: rgba(55, 55, 55, 0.1);
  padding: 10px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
