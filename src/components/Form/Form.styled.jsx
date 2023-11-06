import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #080808;
  font-weight: 600;
  font-size: 20px;
  margin-right: 12px;
  border-radius: 4px 8px;
  outline: none;

  &:hover {
    color: tomato;
    border: 2px solid tomato;
  }
`;

export const Button = styled.button`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #080808;
  color: #080808;
  font-weight: 600;
  font-size: 20px;
  border-radius: 4px 8px;

  &:hover {
    color: tomato;
    border: 2px solid tomato;
  }
`;