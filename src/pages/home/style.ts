import styled from "styled-components";

export const Container = styled.div`
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 10px;

  & .props {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;
