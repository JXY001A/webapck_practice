import React from 'react';
import {isArray} from '../utils/index';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // this.setState((state) => {
        //     debugger;
        //     return {count: state.count + 1};
        // });

        this.setState({
          count:this.state.count + 11
        });
    }
    componentDidMount() {
    }
    componentDidUpdate() {

    }

    render() {
        return [
            <button key="1" onClick={this.handleClick}>Update counter</button>,
            <span key="2">{this.state.count}</span>
        ]
    }
}
export default App;
