import React from 'react';
import styles from './Banner.module.css'

const Banner = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.title}>
                <h1>iphone website</h1>
                <p>
                    this is My first project
                </p>
            </div>
        </div>
    );
};

export default Banner;