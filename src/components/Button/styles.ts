import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #f2f2f2;
  height: 48px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin: 24px 0 16px 0;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.1, '#888')};
  }
`;
