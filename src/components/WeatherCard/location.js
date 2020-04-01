import React from "react";
import styled from "@emotion/styled";

const Location = props => {
  const Container = styled.div`
    text-align: center;
  `;
  const City = styled.h1`
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 1.6rem;
  `;
  const Country = styled.h3`
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 1.1rem;
  `;
  const Temperature = styled.h1`
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 2rem;
  `;

  return (
    <Container>
      <City> Sydney </City>
      <Country>AU</Country>
      <Temperature />
    </Container>
  );
};

export default Location;
