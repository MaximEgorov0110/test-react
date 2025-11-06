import styled from 'styled-components';

export const ProductListStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .products-list {
    flex: 1;
    display: flex;
    align-content: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 35px 20px;
    overflow-x: auto;
  }

  .filter {
    display: flex;
    align-items: center;
    gap: 100px;
    margin-bottom: 20px;

    & button, input {
      border: 2px solid gray;
      border-radius: 20px;
      padding: 8px 16px;
    }
  }
  `