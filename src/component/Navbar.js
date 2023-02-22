import React from 'react';
import logo from '../image/apple-logo.jpg';
import styles from './Navbar.module.css'


const Navbar = () => {
    return (
        <div>
     
            <header className={styles.header}>
                <div className={styles.listContainer}>
                    <ul className={styles.list}>
                        <li>Home Pages</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <img src={logo} className={styles.logo}/>
                </div>
            </header>
            
        </div>
    );
};

export default Navbar;