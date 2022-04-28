import './style.less';
import React, { memo } from 'react';
import { ViewType } from '../../types';

//私有常量

//可抽离的逻辑处理函数/组件

let Titlebar = (props: IProps) => {
    //变量声明、解构
    const { viewType, onChangeViewType, onEnd } = props;

    //组件状态

    //网络IO

    //数据转换
    const changeClass = viewType === ViewType.Mixture ? 'mixture' : 'union';

    //逻辑处理函数
    const onChangeClick = () => {
        const newViewType = viewType === ViewType.Mixture ? ViewType.Union : ViewType.Mixture;
        onChangeViewType(newViewType);
    };

    //组件Effect

    return (
        <div className="titlebar">
            <div className="titlebar-main"></div>
        </div>
    );
};

//props类型定义
interface IProps {
    viewType: ViewType;
    onChangeViewType: (viewType: ViewType) => void;
    onEnd: () => void;
}

//prop-type定义，可选

Titlebar = memo(Titlebar);
export { Titlebar };
