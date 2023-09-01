import styled from "styled-components";

export const Container = styled.div`
    
  background: white;
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
  display: flex;
  height: 40vh;
  width: 25vh;
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-break: normal;

  & section {
    
    display: flex;
    flex-direction: column;
    align-items: end;
    
    
    & .total{
      display: flex;
      flex-direction: column;
      text-align: right;
      
      
    }
    
    & .rating{
      display: flex;
      justify-content: end;
      color: gray;
      margin-bottom: 5px;
      margin-top: 5px;
    }

    & .stars {
      display: flex;
      color: darkorange;
      gap: 3px;
      margin-left: 3px;

    }
    
    & .text {
      width: 200px;
      font-size: 14px;
      margin-bottom: 4px;
    }
    
  }

    & img {
      height: 200px;
      width: 200px;
      border-radius: 10px;
      margin: 0 0 24px;
      
    }
`