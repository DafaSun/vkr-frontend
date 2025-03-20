import React from 'react';
import {BasicButton} from "../BasicButton/BasicButton";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    text: string
    onClick: () => void;
    width?: number;
    height?: number;
}

export const Button2: React.FC<IButtonProps> = (props) => {

    const {width, height ,text, onClick=()=>{}} = props

    return (
        <BasicButton width={width} height={height}  onClick={onClick} text={text} this_style={2}/>
    );
};
