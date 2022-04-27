import './style.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { MianPage } from './pages/MianPage/MianPage';

//私有常量

//可抽离的逻辑处理函数/组件

let App = (props: IProps) => {
    //变量声明、解构
    //组件状态

    //网络IO

    //数据转换

    //逻辑处理函数

    //组件Effect

    return (
        <div className="container">
            <MianPage />
        </div>
    );
};

//props类型定义
interface IProps {}

//prop-type定义，可选

ReactDOM.render(<App />, document.querySelector('#app'));
