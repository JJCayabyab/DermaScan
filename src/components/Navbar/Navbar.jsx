import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <h1 className={styles.siteName}>DERMASCAN</h1>
        </div>

        <div className={styles.menuContainer}>
          <ul className={styles.navLinks}>
            <li><Link to="/analyze">Analyze</Link></li>
            <li><a href="#upload">Skin Conditions</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
