import React, { Component } from 'react';
import styles from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';


class Person extends Component {
    render() {
        return (
            <Aux>
                <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        );
    }
}

export default withClass(Person, styles.Person);