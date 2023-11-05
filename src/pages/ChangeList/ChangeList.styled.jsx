import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
`;

export const Item = styled.li`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #080808;

  &:hover {
    color: tomato;
  }
`;