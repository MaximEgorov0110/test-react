import styled from 'styled-components';

export const ProductListStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 85vh;

  .main {
  flex: 1;
}

.main .products-list {
  flex: 1;
  display: flex;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 35px 20px;
  // min-height: 100vh;
  overflow-x: auto;
}

.main .products-list::-webkit-scrollbar {
  width: 0;
}

input {
    display: block;
    margin: 0 auto 50px auto;
    border: 1px solid #D58C51;
    background: none;
    color: #FFFFFF;
    padding: 5px;
    width: 310px;
    transition: all 0.3s ease;
  
    &:focus {
      border-color: #D58C51;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
      outline: none;
    }
  }

  .mainPagination {
  
  }

  .basket-modal-handler {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
`
