import { useEffect, useState } from "react";
import { getAll } from "../Servise/api/contacts";

const ContactsList = () => {
  const [contacts, setContacts] = useState(null);
  console.log(contacts);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getAll();
        setContacts(data.data.result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchContacts();
  }, []);

  if (!contacts) {
    return <p>...Loading</p>;
  }
  const elements = contacts.map((contact) => (
    <li key={contact._id}>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default ContactsList;
