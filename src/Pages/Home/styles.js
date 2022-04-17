import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1f425b;
  text-align: center;
  height: 100vh;

  h1 {
    font-size: 25px;
    color: #fff;
  }

  div {
    button {
      margin-right: 5px;
      height: 50px;
    }
  }
`;
