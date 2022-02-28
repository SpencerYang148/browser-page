import './style.less';
import React, { memo, useState } from 'react';
import { Button, Input } from 'antd';

//私有常量

//可抽离的逻辑处理函数/组件

let SeachItem = (props: IProps) => {
    //变量声明、解构
    const { name, urlTemplate } = props;

    //组件状态
    const [queryText, setQueryText] = useState('');

    //网络IO

    //数据转换

    //逻辑处理函数
    const handleChange = (e) => {
        const value = e.target.value;
        setQueryText(value);
    };
    const handleSearch = () => {
        const url = urlTemplate.replace('${query}', queryText);
        window.open(url);
    };
    const handleKeyUp = (e) => {
        console.log('handleKeyUp', e);
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    //组件Effect

    return (
        <div className="seach-item">
            <div className="name">{name}:</div>
            <Input allowClear value={queryText} onChange={handleChange} onKeyUp={handleKeyUp} />
            <Button type="primary" onClick={handleSearch}>
                搜索
            </Button>
        </div>
    );
};

//props类型定义
interface IProps {
    name: string;
    urlTemplate: string;
}

//prop-type定义，可选

SeachItem = memo(SeachItem);
export { SeachItem };
