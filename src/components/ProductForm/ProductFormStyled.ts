import styled from 'styled-components';

export const ProductFormStyledContainer = styled.div`
padding: 20px;
max-width: 600px;
margin: 0 auto;

form {
  border: 1px solid black;
  padding: 30px;
  border-radius: 8px;
  background-color: #80808063;

  & .input-container {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  & textarea {
  height: 400px;
  }

  & .btn-container {
  display: flex;
  gap: 30px;
  }
}
`