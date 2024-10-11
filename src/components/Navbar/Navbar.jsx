import styles from './Navbar.module.scss'

const Navbar = () => {

  const showSideBar = () => {
    const sidebar = document.querySelector(`.${styles.sideContainer}`);
    if (sidebar) {
      sidebar.style.display = 'flex';
    } else {
      console.warn('Sidebar element not found');
    }
  }

  const hideSideBar = () => {
    const sidebar = document.querySelector(`.${styles.sideContainer}`);
    if (sidebar) {
      sidebar.style.display = 'none';
    } else {
      console.warn('Sidebar element not found');
    }
  }
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
          <li className={styles.hideOnSmall}><a href="/">Home</a></li>
            <li className={styles.hideOnSmall}><a href="/analyze">Analyze</a></li>
            <li className={styles.hideOnSmall}><a href="/skin-conditions">Skin Diseases</a></li>
            <li className={styles.hideOnSmall}><a href="/about">About</a></li>
            <li className={styles.hideOnSmall}><a href="/contact">Contact</a></li>
            <li className={styles.menuButton} onClick={showSideBar}> <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg> </li>
          </ul>
        </div>

        <div className={styles.sideContainer}>
          <ul className={styles.navLinks}>
            <li onClick={hideSideBar}><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></li>
            <li><a href="/">Home</a></li>
            <li><a href="/analyze">Analyze</a></li>
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
