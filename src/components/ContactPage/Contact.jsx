import Navbar from '../Navbar/Navbar';
import styles from './Contact.module.scss';

import idanImg from '../../assets/images/Idan.jpg';
import jeremyImg from '../../assets/images/Jeremy.jpg';
import malcolmImg from '../../assets/images/Malcolm.jpg';
import kirstenImg from '../../assets/images/Kirsten.jpg';

const Contact = () => {
  const contacts = [
    {
      name: "Idan Josh Bosi",
      email: "joshidanbosi02@gmail.com",
      phone: "0929 964 7407",
      image: idanImg
    },
    {
      name: "Jeremy Jhay Cayabyab",
      email: "cayabyabjeremyjhay25@gmail.com",
      phone: "0908 116 1458",
      image: jeremyImg
    },
    {
      name: "Malcolm James Murillo",
      email: "murillomalcolmjames@gmail.com",
      phone: "0930 005 0065",
      image: malcolmImg
    },
    {
      name: "Kirsten Kyla Taylo",
      email: "taylokyla13@gmail.com",
      phone: "0960 278 0142",
      image: kirstenImg
    }
  ];

  return (
    <>
      <Navbar />
      <div className={styles.contactPage}>
        <h1>Contact List</h1>
        <div className={styles.contactList}>
          {contacts.map((contact, index) => (
            <div key={index} className={styles.contactCard}>
              <img src={contact.image} alt={contact.name} className={styles.contactImage} />
              <h2>{contact.name}</h2>
              <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              <p>Phone: <a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
