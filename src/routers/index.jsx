import React from 'react';
import styles from './index.css';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
          count:this.state.count + 11
        });
    }
    componentDidMount() {
    }
    componentDidUpdate() {

    }

    render() {
        console.log(styles,"styles");
        return (<div  className = {styles.normal}>
            first css moudle
        </div>);
    }
}

export default App;
