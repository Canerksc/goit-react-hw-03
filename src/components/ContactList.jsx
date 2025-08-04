import Contact from './Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
