import React from 'react';
import PropTypes from 'prop-types';
import { InputCreateForm } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <InputCreateForm type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
