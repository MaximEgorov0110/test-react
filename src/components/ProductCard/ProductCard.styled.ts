import styled from 'styled-components';

export const ProductCardStyledContainer = styled.div`
display: flex;
height: 650px;
width: 350px;
border: 2px solid red;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 25px;
border-radius: 20px;

  h3 {
  cursor: pointer;
  }

  .description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  }

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
    padding: 4px 16px;
    border-radius: 30px;
    cursor: pointer;
    background: white;
    transition: all 0.3s ease;
    width: 150px;
    height: 40px;
    }

    .liked {
      border: 2px solid red;
      color: red;
    }

    .link-product {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    text-decoration: none;
    }

    .delete-btn {
    width: 40px;
    margin-left: auto;
    }



`