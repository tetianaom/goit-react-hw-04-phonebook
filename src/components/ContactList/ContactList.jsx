import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListCss } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ContactListCss>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        ))}
      </ContactListCss>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
