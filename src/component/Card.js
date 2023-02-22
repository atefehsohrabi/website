import React, { Component } from 'react';
import styles from './Card.module.css';
import down from '../image/down.svg';
import up from '../image/up.svg';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }
    downHandler = () => {
        if(this.state.counter>=1){
            this.setState(prevState => ({
                counter: prevState.counter - 1,

            }))
        }
       
    }
    upHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }))
    }

    render() {
        const {image,name,cost} = this.props;
        const {counter} = this.state;
        return (
            <div className={styles.content}>
            <div className={styles.container}>
                <img  src={image}/>
                <h3>{name}</h3>
                <p>{cost}</p>

                    <div className={styles.counter}>
                        <img src={down} onClick={this.downHandler} className={this.state.counter ? "" : styles.deactive}/>
                    <span>{counter}</span>
                    <img src={up} onClick={this.upHandler}/>
                </div>
            </div>
            </div>
        );
    }
}

export default Card;