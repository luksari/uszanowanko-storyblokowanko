import styled from 'styled-components';

export const WrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px;
`;

export const ContentStyled = styled.div`
  background: #f001;
  width: 300px;
  padding: 8px 24px;
  border: 1px solid palevioletred;
  border-radius: 15px;
  color: palevioletred;
  text-align: center;

  span {
    font-weight: 700;
  }
`;
