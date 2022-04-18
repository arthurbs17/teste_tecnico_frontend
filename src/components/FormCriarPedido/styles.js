import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  height: 50%;
  min-height: 200px;
  max-width: 350px;
  margin: 100px auto;
  padding: 5px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: #1f425b;

  h2 {
    margin-bottom: 5px;
    background: #fff;
  }

  div {
    background: #fff;
  }
`;

export default FormWrapper;
