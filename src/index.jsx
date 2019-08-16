/*
 * @description:
 * @author: JXY
 * @Date: 2019-08-07 21:41:31
 * @Email: JXY001a@aliyun.com
 * @LastEditTime: 2019-08-16 23:33:50
 */


import React from 'react';
import ReactDOM from 'react-dom';
import App from './routers/index.jsx';
// import {getCube2} from './routers/treeShaking';

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



/**
 * @description: 测试 tree shaking
 * @author: JXY
 * @Date: 2019-08-13 22:02:51
 */

// console.log(getCube2());
