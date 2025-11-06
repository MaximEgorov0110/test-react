import styled from 'styled-components';

export const HeaderStyledContainer = styled.div`
background-color: blue;
height: 60px;
margin-bottom: 20px;

.header {
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
color: white;
padding: 10px 30px;

  & button {
      border: 2px solid gray;
      border-radius: 20px;
      padding: 8px 16px;
      cursor: pointer;
    }
}
`