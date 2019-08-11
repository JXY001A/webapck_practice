import React from 'react';
import ReactDOM from 'react-dom';
import App from './routers/index.jsx';

const container = document.createElement('div');
container.id = 'containter';
document.body.appendChild(container)
ReactDOM.render(<App />,container);

// 热加载模式 HMR
if (module.hot) {
    module.hot.accept('./routers/index.jsx', function() {
        if(container) {
            ReactDOM.render(<App />,container);
        }
    });
}
