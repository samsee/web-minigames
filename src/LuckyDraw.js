import React from 'react';
import './index.css';

class LuckyDraw extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawType: 'number',
            howMany: 1,
            howManyLuck: 1
        }
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
        console.log();
        // runDraw(1, 1);
        return (
        <div>
            <h1>제비뽑기</h1>
            <DrawInput howMany={this.state.howMany} howManyLuck={this.state.howManyLuck} />
            <button onClick={() => this.handleDrawButton()}>추첨하기</button>
            <button>초기화</button>
        </div>
        )
    }

    handleDrawButton() {
        console.log(`HowMany: ${this.state.howMany}, HowManyLuck: ${this.state.howManyLuck}`)
    }

    handleResetButton() {

    }
}

function runDraw(n, m) {

}

// 다시 function으로 바꿀 수 있나?
class DrawInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            howMany: this.props.howMany,
            howManyLuck: this.props.howManyLuck
        }

        this.handleChange = this.handleChange.bind(this);
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
        return (<div><p>후보 수 <input type='number' name='howMany' defaultValue={this.state.howMany} onChange={this.handleChange}></input></p>
            <p>당첨 수 <input type='number' name='howManyLuck' defaultValue={this.state.howManyLuck} onChange={this.handleChange}></input></p></div>);
    }
}

// function DrawInput(props) {
//     return (<div><p>후보 수 <input type='number' value={props.howMany}></input></p>
//         <p>당첨 수 <input type='number' value={props.howManyLuck}></input></p></div>);
// }

function drawResult() {

}

export default LuckyDraw;