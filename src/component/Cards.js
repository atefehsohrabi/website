import React from 'react';
import Card from "./Card";
import iphone13 from '../image/iphone13.jpg';
import iphone6 from '../image/iphone6.jpg';
import iphone14 from '../image/iphone14.jpg';
import iphone13pro from '../image/iphone13pro.jpg';
import styles from './Card.module.css';

const Cards = () => {

  
    return (
        <div className={styles.content}>
            <Card image={iphone13} name="iphone13" cost="500$"/>
            <Card image={iphone13} name="iphone13" cost="500$" />
            <Card image={iphone13} name="iphone13" cost="500$" />
            <Card image={iphone13} name="iphone13" cost="500$" />
        </div>
    );
};

export default Cards;