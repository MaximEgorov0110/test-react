import styled from "styled-components";

export const ProductDepailsStyledContainer = styled.div`
    height: calc(100vh - 130px);
    display: flex;
    justify-content: center;
    align-items: center;
}
.back-btn {
margin-bottom: 20px;
padding: 8px 16px;
}

.product-wrapper {
max-height: 900px;
max-width: 1600px;
border: 2px solid red;
border-radius: 20px; 
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
}

img {
width: 400px;
height: 400px;
}

.footer {
position: relative;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
bottom: 0;

  & button {
    border: 2px solid gray;
    border-radius: 20px;
    padding: 8px 16px;
    cursor: pointer;
  }
}
`