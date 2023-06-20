import React from 'react';
import PropTypes from 'prop-types';
import { BtnAddContact } from '../ContactForm/ContactForm.styled';
import { ContactItemCss } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <ContactItemCss>
    <p>
      {name}: {number}
    </p>
    <BtnAddContact onClick={() => onDeleteContact(id)}>Delete</BtnAddContact>
  </ContactItemCss>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
