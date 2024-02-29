import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact.jsx";
import PropTypes from "prop-types";

const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector((state) => state.contacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
};

export default ContactList;
