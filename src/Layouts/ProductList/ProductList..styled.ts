import styled from 'styled-components';

export const ProductListStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 85vh;

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
    margin-bottom: 20px;

    & button {
      margin-right: 20px
    }
  }
  `