import React from 'react';
import './index.css';

class LuckyDraw extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            drawType: 'number',
            howMany: props.howMany,
            howManyLuck: props.howManyLuck
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleResetButton = this.handleResetButton.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log(`handleChangeInput:${name} -> ${value}`);
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
        <div>
            <h1>제비뽑기</h1>
            <DrawInput howMany={this.state.howMany} howManyLuck={this.state.howManyLuck} onChange={this.handleChange} />
            <button onClick={this.handleDrawButton}>추첨하기</button>
            <button onClick={this.handleResetButton}>초기화</button>
        </div>
        )
    }

    handleDrawButton() {
        console.log(`HowMany: ${this.state.howMany}, HowManyLuck: ${this.state.howManyLuck}`);
    }

    handleResetButton() {
        console.log('reset' + this.props.howMany + " " + this.props.howManyLuck);
        this.setState({
            howMany: this.props.howMany,
            howManyLuck: this.props.howManyLuck
        });
    }
}

function runDraw(n, m) {

}

function DrawInput(props) {
    return (<div><p>후보 수 <input type='number' name='howMany' value={props.howMany} onChange={props.onChange} min='1'></input></p>
        <p>당첨 수 <input type='number' name='howManyLuck' value={props.howManyLuck} onChange={props.onChange} min='1'></input></p></div>);
}

function drawResult() {

}

export default LuckyDraw;