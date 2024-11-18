/**
 * Program Title: Navbar.jsx
 * Programmers: Jeremy Jhay B. Cayabyab
 * 
 * Where the Program Fits in the General System Design:
 * This file defines the Navbar component, which is responsible for rendering the 
 * navigation bar of the web application. It includes links to various pages such as 
 * Home, Analyze, Skin Diseases, About, and Contact, along with a sidebar menu for 
 * mobile responsiveness. The component also handles the logic for showing and hiding 
 * the sidebar when the menu button is clicked.
 * 
 * Date Written: September 29, 2024
 * Date Revised: October 12, 2024
 * 
 * Purpose:
 * - To provide a responsive navigation bar for the web application.
 * - To toggle the visibility of the sidebar on small screen sizes.
 * - To enable navigation between different pages within the app.
**/

import styles from './Navbar.module.scss'

const Navbar = () => {

  {/*A function to show sidebar when it reac a certain dimension */ }
  const showSideBar = () => {
    const sidebar = document.querySelector(`.${styles.sideContainer}`);
    if (sidebar) {
      sidebar.style.display = 'flex';
    } else {
      console.warn('Sidebar element not found');
    }
  }

  {/* A function to hide side bar when the 'X' button is clicked */ }
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

        {/* Navigation links for larger screens */}
        <div className={styles.menuContainer}>
          <ul className={styles.navLinks}>
            <li className={styles.hideOnSmall}><a href="/">Home</a></li>
            <li className={styles.hideOnSmall}><a href="/analyze">Analyze</a></li>
            <li className={styles.hideOnSmall}><a href="/skin-conditions">Skin Diseases</a></li>
            <li className={styles.hideOnSmall}><a href="/about">About</a></li>
            <li className={styles.hideOnSmall}><a href="/contact">Contact</a></li>
            <li className={styles.menuButton} onClick={showSideBar}>
              <svg xmlns="http://www.w3.org/2000/svg"
                height="35px" viewBox="0 -960 960 960"
                width="35px" fill="#e8eaed">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </li>
          </ul>
        </div>

        {/* Navigation links for smaller screens */}
        <div className={styles.sideContainer}>
          <ul className={styles.navLinks}>
            <li onClick={hideSideBar}>
              <svg xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#e8eaed">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </li>
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
