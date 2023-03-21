import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #333;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  max-width: 300px;
  margin: auto;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 32px;

    input {
      font-size: 1rem;
      background: #f3f3f3;
      border-radius: 6px;
      border: 2px solid #f1f1f1;

      padding: 10px 5px;

      & + input {
        margin-top: 16px;
      }
    }
  }

  button {
    margin-top: 16px;
    border-radius: 6px;
    padding: 10px 5px;
    width: 100%;
    color: #000;
  }

  a {
    color: #f3f3f3;
    display: block;
    margin-top: 16px;
    text-decoration: none;
    font-size: 0.8rem;

    & + a {
      font-size: 0.7rem;
    }

    &:hover {
      color: #e4f4f4;
    }
  }
`;
