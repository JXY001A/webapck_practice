import React from 'react';
import styles from './sass.scss';
class Sass extends React.Component {
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
        return (<div  className = {styles.sidebar}>
           sass 练习
        </div>);
    }
}

export default Sass;
