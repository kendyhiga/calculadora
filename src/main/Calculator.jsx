import React, { Component } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'
import './Calculator.css'

export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.setDigit = this.setDigit.bind(this)
    }

    clearMemory() {
        console.log('limpar')
    }

    setOperation(operation) {
        console.log(operation)
    }

    setDigit(n) {
        console.log(n)
    }

    render() {
        return (
            <div className='calculator'>
                <Display value={100} />
                <Button label='AC' click={this.clearMemory} triple />
                <Button label='/' click={this.setOperation} operation />
                <Button label='7' click={this.setDigit} />
                <Button label='8' click={this.setDigit} />
                <Button label='9' click={this.setDigit} />
                <Button label='*' click={this.setOperation} operation />
                <Button label='4' click={this.setDigit} />
                <Button label='5' click={this.setDigit} />
                <Button label='6' click={this.setDigit} />
                <Button label='-' click={this.setOperation} operation />
                <Button label='1' click={this.setDigit} />
                <Button label='2' click={this.setDigit} />
                <Button label='3' click={this.setDigit} />
                <Button label='+' click={this.setOperation} operation />
                <Button label='0' click={this.setDigit} double />
                <Button label='.' click={this.setDigit} />
                <Button label='=' click={this.setOperation} operation />
            </div>
        )
    }
} 