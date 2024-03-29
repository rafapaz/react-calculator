import React from 'react'
import Button from './Button'
import Display from './Display'
import Menu from './Menu';
import './w3.css'
import './calculator.css'

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            acumul : 0,
            curr : 0,
            displayValue : 0,
            operator : '',
            floatNumber: false
        }

        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.setDigit = this.setDigit.bind(this);
    }

    clearMemory() {
        this.setState({
            acumul : 0,
            curr : 0,
            displayValue : 0,
            operator : '',
            floatNumber: false
        });
    }

    setOperation(op) {

        var number = 0;

        switch (this.state.operator) {
            case '+':
                number = this.state.acumul + this.state.curr;
                break;
            case '-':
                number = this.state.acumul - this.state.curr;
                break;
            case '*':
                number = this.state.acumul * this.state.curr;
                break;
            case '/':
                number = this.state.acumul / this.state.curr;
                break;
            case '=':
                number = this.state.acumul;
                break; 
            default:
                number = this.state.curr;
                break; 
        }
        
        this.setState({operator : op});
        this.setState({acumul : number});        
        this.setState({displayValue : number});
        this.setState({curr : 0});
    }

    setDigit(n) {
        if (n === '.')
            this.setState({floatNumber: true});
        
        var number_str = '';

        if (this.state.floatNumber) {
            number_str = this.state.curr.toString() + '.' + n;
            this.setState({floatNumber: false});
        }
        else {
            number_str = this.state.curr.toString() + n;
        }

        var number = parseFloat(number_str);
        this.setState({curr : number});
        this.setState({displayValue : number});
    }

    render() {
        return (
            <div>
            <Menu />
                <div className="calculator w3-panel w3-border w3-round-large w3-padding-16 w3-row">
                    <Display value={this.state.displayValue} />
                    <Button label="AC" click={this.clearMemory} myClass="w3-button w3-border w3-round w3-col l9"/>
                    <Button label="/" click={this.setOperation} />
                    <Button label="7" click={this.setDigit} />
                    <Button label="8" click={this.setDigit} />
                    <Button label="9" click={this.setDigit} />
                    <Button label="*" click={this.setOperation} />
                    <Button label="4" click={this.setDigit} />
                    <Button label="5" click={this.setDigit} />
                    <Button label="6" click={this.setDigit} />
                    <Button label="-" click={this.setOperation} />
                    <Button label="1" click={this.setDigit} />
                    <Button label="2" click={this.setDigit} />
                    <Button label="3" click={this.setDigit} />
                    <Button label="+" click={this.setOperation} />
                    <Button label="0" click={this.setDigit} />
                    <Button label="." click={this.setDigit} />
                    <Button label="=" click={this.setOperation} myClass="w3-button w3-border w3-round w3-col l6" />
                </div>
            </div>
        );
    }
}