import styled from '@emotion/styled';

export const ContactCreateForm = styled.form`
  width: 500px;
  padding: 10px;
  border: 2px solid #898ecf;
  border-radius: 4px;
`;

export const InputCreateForm = styled.input`
  display: block;
  width: 200px;
  margin-bottom: 10px;
`;

export const BtnAddContact = styled.button`
  padding: 5px 20px;
  margin-top: 5px;
  border: 1px solid #898ecf;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #297bd5b5;
    border-color: transparent;
  }
`;
