import React from 'react';
import ReactDOM from 'react-dom';
class ClickCounter extends React.Component {
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
          count:this.state.count + 1
        });
    }
    componentDidMount() {
        console.log('我已经挂载上去了！');
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
const container = document.createElement('div');
container.id = 'containter';
document.body.appendChild(container)
ReactDOM.render(<ClickCounter />,container);
