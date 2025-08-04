import styles from './Contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";



const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.card}>
      <p><IoMdPerson />  {contact.name}</p>
      <p><FaPhoneAlt /> {contact.number}</p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
