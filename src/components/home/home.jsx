import React from "react";
import { HomeContainer, List1, Title } from "../../styles/homeStyle";
import { Link } from "react-router-dom";
import AllStructures from "../structures/allStructures";

const HomeComponent = () => {
  return (
    <HomeContainer >
      <div>
      <Title>"Todo-Apps"</Title>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "20px",
            // marginTop: "300px"
          }}
        >
          <Link to="todoApp01" style={{ textDecoration: "none" }}>
            <List1>List 1</List1>
          </Link>
          <Link to="todoApp02" style={{ textDecoration: "none" }}>
            <List1>List 2</List1>
          </Link>
          <Link to="todoApp03" style={{ textDecoration: "none" }}>
            <List1>List 3</List1>
          </Link>
        </div>
      </div>
    </HomeContainer>
  );
};

export default HomeComponent;
