import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f2f2;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 0;
  font-size: 1.1rem;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    color: #666360;
    margin-right: 16px;
  }
`;
