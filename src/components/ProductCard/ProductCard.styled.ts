import styled from 'styled-components';

export const ProductCardStyledContainer = styled.div`
box-sizing: border-box;
display: flex;
height: 650px;
width: 350px;
border: 2px solid red;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 25px;

  img {
    height: 300px;
    width: 300px;
  }

  .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  button {
    color: gray;
    border: 2px solid gray;
    padding: 8px 16px;
    border-radius: 30px;
    cursor: pointer;
    background: white;
    transition: all 0.3s ease
    }

    .liked {
      border: 2px solid red;
      color: red;
    }

`