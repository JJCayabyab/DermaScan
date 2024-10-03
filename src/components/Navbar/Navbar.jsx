import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <a href="/">
            <h1 className={styles.siteName}>DERMASCAN</h1>
          </a>
        </div>

        <div className={styles.menuContainer}>
          <ul className={styles.navLinks}>
            <li><a to="/analyze">Analyze</a></li>
            <li><a href="/skin-conditions">Skin Diseases</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
