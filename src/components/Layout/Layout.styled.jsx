import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Header = styled.header`
  border-bottom: solid 1px grey;
  margin-bottom: 24px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 16px;
  margin-left: 12px;
  font-weight: 600;
  font-size: 22px;
  color: #080808;

  &:hover {
    color: tomato;
  }
`;