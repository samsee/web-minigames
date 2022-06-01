import React from 'react';
import './index.css';

class LuckyDraw extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            drawType: 'number',
            howMany: props.howMany,
            howManyLuck: props.howManyLuck,
            drawResult: [],
            showResult: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleResetButton = this.handleResetButton.bind(this);
        this.handleDrawButton = this.handleDrawButton.bind(this);
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
        const showResult = this.state.showResult;
        let drawResult;

        if (showResult)
            drawResult = <DrawResult result={this.state.drawResult} />;

        return (
        <div>
            <h1>제비뽑기</h1>
            <DrawInput howMany={this.state.howMany} howManyLuck={this.state.howManyLuck} onChange={this.handleChange} />
            <button onClick={this.handleDrawButton}>추첨하기</button>
            <button onClick={this.handleResetButton}>초기화</button>
            {drawResult}
        </div>
        )
    }

    handleDrawButton() {
        const drawResult = runDraw(this.state.howMany, this.state.howManyLuck);
        this.setState({showResult: true, drawResult: drawResult});
    }

    handleResetButton() {
        this.setState({
            howMany: this.props.howMany,
            howManyLuck: this.props.howManyLuck,
            showResult: false,
            drawResult: []
        });
    }
}
// NOTE 구현 노트
// 1. 요소 하나씩 뽑는걸 재귀로 구현하기 -> size가 커지면 스택이 자라나서 문제가 생길 수 있다. 5000명 중 500명 뽑기 등.
// 2. 반복문으로 구현 : 이쪽이 안전할 것 같은데 몇 가지 정해야 한다.
// 2-1. 전체를 Range로 하고 중복된게 나오면 넘어가게 하기
// 2-2. Range를 점차 나눠서 하기. Merge sort 처럼.. 영역별로 고르게 할 수 있는 장점도 있을 것 같다.
// 둘 다 괜찮은 방법 같다. 정해서 실행할 수 있게 해보자.
/**
 * 추첨 실행
 * @param n 개 중에
 * @param m 개 뽑기
 */
function runDraw(n, m) {
    let result = [];
    for (let i = 0; i < m;) {
        const draw = getRandomInt(0, n - 1);
        if (-1 === result.indexOf(draw)) {
            result.push(draw);
            i++;
        }
    }
    return result;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }
}

function DrawInput(props) {
    return (<div>
        <p>후보 수
            <input type='number' name='howMany' value={props.howMany} onChange={props.onChange} min='1'></input>
        </p>
        <p>당첨 수
            <input type='number' name='howManyLuck' value={props.howManyLuck} onChange={props.onChange} min='1'></input>
        </p>
    </div>);
}

function DrawResult(props) {
    const drawList = props.result.map((number) =>
        <li key={number}>{number}</li>
    );
    return (<div>
        <h2>추첨 결과</h2>
        <h3>당첨 목록</h3>
        <div>
            <ul>
                {drawList}
            </ul>
        </div>
    </div>);
}

export {LuckyDraw as default, runDraw};