import './style.less';
import React, { memo } from 'react';
import { SeachItem } from '../../components/SeachItem/SeachItem';

//私有常量

//可抽离的逻辑处理函数/组件

let MianPage = (props: IProps) => {
    //变量声明、解构

    //组件状态

    //网络IO

    //数据转换

    //逻辑处理函数

    //组件Effect

    return (
        <div className="main-page">
            <div className="search-con">
                <SeachItem
                    name="Google"
                    urlTemplate="https://www.google.com.hk/search?q=${query}"
                />
                <SeachItem name="Bing" urlTemplate="https://cn.bing.com/search?q=${query}" />
                <SeachItem name="Baidu" urlTemplate="https://www.baidu.com/s?wd=${query}" />
                <SeachItem name="Github" urlTemplate="https://github.com/search?q=${query}" />
                <SeachItem name="SO" urlTemplate="https://stackoverflow.com/search?q=${query}" />
                <SeachItem
                    name="MDN"
                    urlTemplate="https://developer.mozilla.org/zh-CN/search?q=${query}"
                />
                <SeachItem name="npm" urlTemplate="https://www.npmjs.com/package/${query}" />
            </div>
        </div>
    );
};

//props类型定义
interface IProps {}

//prop-type定义，可选

MianPage = memo(MianPage);
export { MianPage };
