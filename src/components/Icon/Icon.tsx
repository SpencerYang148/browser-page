import './style.less';
import React, { SVGProps } from 'react';

//私有常量

//可抽离的逻辑处理函数/组件

const Icon = (props: IProps) => {
    //变量声明、解构
    // eslint-disable-next-line react/prop-types
    const { name, className, ...svgProps } = props;
    //组件状态

    //网络IO

    //数据转换

    //逻辑处理函数

    //组件Effect

    return (
        <svg className={`icon ${className ?? ''}`} {...svgProps} aria-hidden="true">
            <use xlinkHref={'#' + name}></use>
        </svg>
    );
};

//props类型定义
interface IProps extends SVGProps<SVGSVGElement> {
    name: string;
}
export type IIconProps = IProps;

//prop-type定义，可选
export { Icon };
