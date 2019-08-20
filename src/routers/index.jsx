import React from 'react';
import styles from './index.css';
import Sass from './sass.jsx';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handleClick = this.handleClick.bind(this);
        this.bundle = this.bundle.bind(this);
    }

    handleClick() {
        this.setState({
          count:this.state.count + 11
        });
    }
    bundle() {
        import(/* webpackChunkName: "dynamicImport" */ './dynamicImport.js').then((module)=>{
            const print = module.default;
            print();
        });
    }
    componentDidMount() {
    }
    componentDidUpdate() {

    }

    render() {
        console.log(styles,"styles");
        return (<div  className = {styles.normal} >
            <button onClick={this.bundle}>点我</button>
            <Sass />
        </div>);
    }
}

export default App;
