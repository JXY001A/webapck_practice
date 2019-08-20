import React from 'react';
import styles from './index.css';
import Sass from './sass.jsx';
import loadable from '@loadable/component'


const Title = loadable(() => import('./title.jsx'))
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showTitle:false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.bundle = this.bundle.bind(this);
        this.hiddenTitle = this.hiddenTitle.bind(this);
        this.showTitle =   this.showTitle.bind(this);

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
    showTitle() {
        this.setState({
            showTitle:true,
        })
    }
    hiddenTitle() {
        this.setState({
            showTitle:false,
        })
    }
    componentDidMount() {

    }
    componentDidUpdate() {

    }

    render() {
        const {showTitle} = this.state;
        console.log(Title);
        return (<div  className = {styles.normal} >
            {
                showTitle?<Title /> : null
            }
            <div><button onClick={this.bundle}>点我</button></div>
            <div><button onClick={this.showTitle}>Show Title</button></div>
            <div><button onClick={this.hiddenTitle}>hidden Title</button></div>
            <Sass />
        </div>);
    }
}

export default App;
