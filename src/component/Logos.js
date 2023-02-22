import React, { Component } from 'react';
import apple from '../image/logo-ap.png';
import samsung from '../image/samsung.png';
import xiaomi from '../image/xiaomi.png';
import styles from './Logos.module.css';

class Logos extends Component {
    render() {
        return (
            <div className={styles.container} >
                <h2>Who support us?</h2>
                <div>
                    <img src={apple} />
                    <img src={samsung} />
                    <img src={xiaomi} />
                </div>
            </div>
        );
    }
}

export default Logos;