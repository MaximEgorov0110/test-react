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

  & img {
    height: 300px;
    width: 300px;
  }

  & .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  & .like {
    background-color: blue;
  }
`