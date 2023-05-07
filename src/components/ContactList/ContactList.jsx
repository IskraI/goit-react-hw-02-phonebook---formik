import React from 'react';
import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';

import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    {contacts.map(contact => {
      return (
        <Contact
          key={contact.id}
          contact={contact}
          onClick={() => onDeleteContact(contact.id)}
        />
      );
    })}
  </ul>
);
export default ContactList;
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
};
