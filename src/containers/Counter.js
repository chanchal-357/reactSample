import React from "react";
import { connect } from "react-redux";
import * as CounterAction from "../actions/Counter";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.counts
        };
    }

    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={() => this.props.decrementCounter(this.props.count)}>
                        -
                    </button>
                    <span className="count">{this.props.count}</span>
                    <button onClick={() => this.props.incrementCounter(this.props.count)}>
                        +
                    </button>
                    <button className="reset" onClick={this.props.resetCounter}>
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log("State: ", JSON.stringify(state));
    return {
        count: state.counter && state.counter.count ? state.counter.count : 0
    };
};

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: count => dispatch(CounterAction.incrementCounter(count)),
        decrementCounter: count => dispatch(CounterAction.decrementCounter(count)),
        resetCounter: () => dispatch(CounterAction.resetCounter())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
