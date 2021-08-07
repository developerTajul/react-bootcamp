import React, { Component } from 'react';

class App extends Component{
    state = {
        count : 10,
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }


    decrementCount = () => {
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            });
        }else{

        }
    }


    render(){
        const { count } = this.state;
        const { incrementCount,  decrementCount } = this;
        return(
             
                <div className="counter-area">
                    <h1>Counter App</h1>
                    <p>Counter - {count}</p>
                    <button onClick={incrementCount}>Increment</button>
                    <button  onClick={decrementCount}>Decrement</button>
                    <IsOddOrEven count={count} />
                </div>
        )
    }
}

class IsOddOrEven extends Component{
    render(){
        const numberState = this.props.count % 2 === 0 ? 'Even' : 'Odd';
        return(
            <>
                <p> {this.props.count} is {numberState}</p>
            </>
        )
    }
}

export default App;