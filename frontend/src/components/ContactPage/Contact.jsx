/**
 * Program Title: Contact.jsx
 * Programmers: Kirsten Kyla Taylo
 * 
 * Where the Program Fits in the General System Design:
 * This file defines the Contact component, which is responsible for displaying 
 * a list of contacts with their respective details (name, email, and phone). 
 * It renders a contact page showing all contacts as cards that users can view 
 * and use to get in touch via email or phone.
 * 
 * Date Written: [Date]
 * Date Revised: [Date]
 * 
 * Purpose:
 * - To display a list of contacts from the data source (ContactData).
 * - To provide clickable email and phone links for easy communication.
 * - To enhance the user experience with a visually styled contact list.
 */

import Navbar from '../Navbar/Navbar';
import styles from './Contact.module.scss';
import { contacts } from '../../data/ContactData';

const Contact = () => {

  // Map contacts to  generate the contact cards
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

        {/*Display contact cards*/}
        <div className={styles.contactList}>
          {displayInfo}
        </div>
      </div>
    </>
  );
};

export default Contact;
