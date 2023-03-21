import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  background: #444;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 500px;
  border: 1px solid #999;
  border-radius: 10px 0 10px 0;
  padding: 16px;

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 0;
    width: 300px;

    h1 {
      font-size: 1.2rem;
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #f4ede8;
    display: block;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;
