import Navbar from '../Navbar/Navbar';
import styles from './Contact.module.scss';
import { contacts } from '../../data/ContactData';

const Contact = () => {

  const displayInfo = contacts.map((contact, index) => {
    return (
      <div key={index} className={styles.contactCard}>
        <img src={contact.image} alt={contact.name} className={styles.contactImage} />
        <h2>{contact.name}</h2>
        <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p>Phone: <a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
      </div>
    )
  })
  return (
    <>
      <Navbar />
      <div className={styles.contactPage}>
        <h1>Contact List</h1>
        <div className={styles.contactList}>
          {displayInfo}
        </div>
      </div>
    </>
  );
};

export default Contact;
